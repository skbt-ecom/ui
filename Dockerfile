FROM registry.sovcombank.group/project-cache/library/node:18 as build

ARG NPM_REGISTRY

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry $NPM_REGISTRY/npm-all/
RUN npm ci

COPY . .

RUN npm run build
RUN npm run build:storybook
RUN npm run build:playroom

FROM registry.sovcombank.group/project-cache/nginxinc/nginx-unprivileged:1.20.2

COPY --from=build /usr/src/app/public /var/www/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
