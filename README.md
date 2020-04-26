# Docker, Mongo, React and Node with Typescript

## Requirements

-  Docker
-  Yarn

## How to

-  Clone this repo.
   -  Type `yarn` to install its dependencies.
   -  Type `docker-compose up -f docker-compose.dev.yml --build` to build and run the database.
-  Configuring the .env:
   -  Copy the `.env.example` from `server` to `.env`
   -  Copy the `.env.example` from `web` to `.env.production` and `.env.development`
   -  Make your changes
-  Starting for development:
   -  Type `yarn start` to start the web and server.
   -  Access `http://localhost:3000` on the browser.
-  Starting for production:
   -  Type `yarn build` to build the packages.
   -  Type `yarn server:production` to start the production build of server.
   -  Type `yarn web:production` to start the production build of web.
   -  Access `http://localhost:5000` on the browser.

## Using Docker

-  Configuring the .env:
   -  Copy the `.env.example` from `server` to `.env`
      -  Replace the `localhost` from `MONGO_URL` to `database` (or the container's name)
   -  Copy the `.env.example` from `web` to `.env.production` and `.env.development`
   -  Make your changes
-  Type `docker-compose up --build`
-  Access `http://localhost:5000` on the browser.

## Possible Errors

-  MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
   -  Be sure your `MONGO_URL` on `server .env` has the container name instead of `localhost` (e.g: `mongodb://database/test`)

## Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |


#### [Docker + Node + Mongo with TypeScript](https://github.com/lucasgdb/docker-mongo-node-ts)

#### [React with TypeScript](https://github.com/lucasgdb/react-ts)
