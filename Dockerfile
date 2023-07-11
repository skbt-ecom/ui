FROM registry.sovcombank.group/project-cache/library/node:18 as build

ARG PROXY
ARG http_proxy="http://proxy-server.sovcombank.group:3128" 
ARG https_proxy="http://proxy-server.sovcombank.group:3128" 
ARG no_proxy="127.0.0.1,.sovcombank.group" 
ARG NPM_REGISTRY

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry $NPM_REGISTRY/npm-all/
RUN npm i

COPY . .

RUN npm run build-sb

FROM registry.sovcombank.group/project-cache/library/node:18

ARG NPM_REGISTRY
RUN npm config set registry $NPM_REGISTRY/npm-all/

COPY --from=build /usr/src/app/storybook-static ./storybook-static
COPY serve.js ./

RUN npm i express 
CMD [ "node", "serve.js"]

EXPOSE 8080
