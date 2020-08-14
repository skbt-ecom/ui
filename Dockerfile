FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-storybook

RUN [ "npx", "http-server", "./storybook-static"]

EXPOSE 8080
