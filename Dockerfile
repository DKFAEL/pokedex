FROM node:latest as pokedex
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM  nginx:alpine
VOLUME /var/cache/nginx
COPY --from=pokedex app/dist/pokedex /user/share/nginx/html
COPY ./config/nginx.conf  /etc/ngix/conf.d/default.conf
