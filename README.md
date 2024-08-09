# Pokédex

This repository is a template for a Pokédex application. It contains a server-side
REST API built using [NestJS](https://nestjs.com) and a client-side single-page
application built in [Angular](https://angular.dev).

## Prerequisites
* [Node.js v20](https://nodejs.org/en)

## Setup
1. Clone the repository.
2. Install dependencies:
    ```shell
    cd /path/to/cloned/pokedex/
    cd api/
    npm install
    cd ../app/
    npm install
    ```

## Run
In two separate shells, start the API and app:
```shell
cd api/
npm run start
```
```shell
cd app/
npm run start
```
Both the API and app will rebuild as changes are made to them.
