# Repository for class project

This repo contains my class project for CSC515 - Advanced Internet Programming.

## Getting Started

Clone this repository and install its dependencies:

    git clone https://github.com/MissouriState-CSC515-Spring2020/domitius-project.git
    cd domitius-project
    npm install

## Commands
`npm run build` builds the application to the `public/` directory in chunks, along with a sourcemap for debugging (if `sourcemap` is set to true in [rollup.config.js](./rollup.config.js)).

`npm start` launches a server, using [serve](https://github.com/zeit/serve) (localhost:5000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run npm start and npm run watch in parallel.

