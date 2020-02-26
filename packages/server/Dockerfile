FROM node:alpine

LABEL author = "Lucas Bittencourt"

RUN mkdir -p /server
WORKDIR /server

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile --non-interactive

COPY . .

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN if [ $NODE_ENV = "production" ]; \
    then yarn build && \
    rm -r node_modules && \
    yarn --pure-lockfile --non-interactive --production; \
    fi
