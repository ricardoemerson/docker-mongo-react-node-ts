FROM node:alpine AS build

LABEL author = "Lucas Bittencourt"

RUN mkdir -p /web
WORKDIR /web

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile --non-interactive

COPY . .

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN if [ $NODE_ENV = "production" ]; then yarn test --watchAll=false --silent; fi
RUN yarn build

RUN if [ $NODE_ENV = "production" ]; \
    then rm -r node_modules && \
    yarn --pure-lockfile --non-interactive --production; \
    fi

FROM nginx:alpine

COPY --from=build /web/build/ /usr/share/nginx/html/
COPY --from=build /web/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
