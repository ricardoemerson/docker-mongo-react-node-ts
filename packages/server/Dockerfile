FROM node:alpine

LABEL author = "Lucas Bittencourt"

RUN mkdir -p /server
WORKDIR /server

COPY package*.json yarn.lock ./
RUN yarn

COPY . .

ENTRYPOINT [ "yarn", "dev" ]
