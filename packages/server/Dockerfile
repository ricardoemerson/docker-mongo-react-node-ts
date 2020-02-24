FROM node:alpine

RUN mkdir -p /server
WORKDIR /server

COPY package*.json yarn.lock ./
RUN yarn --pure-lockfile

COPY . .

ENTRYPOINT [ "yarn", "dev" ]
