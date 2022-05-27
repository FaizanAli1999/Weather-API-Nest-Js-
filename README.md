<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Weather API 

## Description
An API used to get and store weather information of different cities.

```bash
# Endpoint to store information

POST : localhost:3000/api/weather
it contains the body....
{
    "cityName": "string"
}
```
```bash
# Endpoint to get information of all cities presented in the  database

GET : localhost:3000/api/weather

```

```bash
# Endpoint to get information of single city

GET : localhost:3000/api/weather/:id

id will unquily identify each record in the database
```

```bash
# Endpoint to update the record in the database

PUT : localhost:3000/api/weather/:id
id will unquily identify each record in the database

it contain the body in json format

{
.......Keys and values you want to update.
}

```
```bash
# Endpoint to delete the record in the database

DELETE : localhost:3000/api/weather/:id

```

# Config

Set database configuration in app.module file to access the database 

```bash

@Module({
  imports: [WeatherModule,
    TypeOrmModule.forRoot({
      type: '***',
      host: '***',
      port: **,
      username: '***',
      password: '***',
      database: '***',
      autoLoadEntities: true,
      synchronize: true,
    }),],
    
    ```

