FROM node:lts-alpine as build

ARG NPM_REGISTRY

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry $NPM_REGISTRY/npm-all/
RUN npm ci

COPY . .

RUN npm run build-storybook

FROM node:lts-alpine

ARG NPM_REGISTRY

COPY --from=build /usr/src/app/storybook-static ./storybook-static

COPY storybook-serve.js ./storybook-serve.js
COPY package*.json ./

RUN npm config set registry $NPM_REGISTRY/npm-all/
RUN npm i express

EXPOSE 8080
CMD [ "node", "storybook-serve.js"]
