FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-storybook

EXPOSE 8080
CMD [ "node", "storybook-serve.js"]
