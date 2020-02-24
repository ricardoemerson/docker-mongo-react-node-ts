# Docker, Mongo, React and Node with Typescript

## Requirements

-   Docker

## How to

-   clone this repo
    -   development:
        -   type `yarn` to install its dependencies
        -   type `docker-compose up --build` to build and run the server with web
        -   type `yarn start` to start the web `http://localhost:3000` or access the product build on `http://localhost:3001`
    -   production:
        -   type `docker-compose -f docker-compose.prod.yml up --build` to build and run the server with web
        -   access the product build on `http://localhost:3001`
