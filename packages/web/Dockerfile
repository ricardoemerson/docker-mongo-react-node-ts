FROM node:alpine AS build

LABEL author = "Lucas Bittencourt"

RUN mkdir -p /web
WORKDIR /web

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=build /web/build/ /usr/share/nginx/html/
COPY --from=build /web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

ENTRYPOINT ["nginx", "-g", "daemon off;"]
