FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

RUN npm run build-storybook

EXPOSE 8080
CMD [ "pm2", "serve", "./storybook-static", "8080"]
