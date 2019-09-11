FROM nginx:alpine
RUN mkdir /srv/www ; sed -i 's/.*Welcome to nginx.*/\<h1\>Welcome to ecom-ui nginx!\<\/h1\>/' /usr/share/nginx/html/index.html
COPY ./storybook-static/* /srv/www