FROM node:lts-alpine as build

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
RUN npm ci

COPY . .

CMD ["npm", "run", "start:ci"]

EXPOSE 8080

