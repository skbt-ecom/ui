FROM node:14-alpine as build

ARG PROXY
ARG NO_PROXY
ARG NPM_REGISTRY
ENV NO_PROXY $NO_PROXY
ENV HTTP_PROXY $PROXY
ENV HTTPS_PROXY $PROXY

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry $NPM_REGISTRY/npm-all/
RUN npm i

COPY . .

RUN npm run build-storybook

FROM node:14-alpine

ARG NPM_REGISTRY
RUN npm config set registry $NPM_REGISTRY/npm-all/

COPY --from=build /usr/src/app/storybook-static ./storybook-static
COPY serve.js ./

RUN npm i express 

CMD [ "node", "serve.js"]

EXPOSE 8080
