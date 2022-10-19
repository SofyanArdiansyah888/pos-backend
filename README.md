<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://graphql.org/img/brand/logos/logo.svg" width="200" alt="Graphql Logo" /></a>
  <a href="https://www.postgresql.org" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="200" alt="Postgre Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>
 

## Description

Simple point of sales graphql service build with NestJS, Postgres and Prisma

## Installation

```bash
$ npm install

# change variable DATABASE_URL at .env file with your database configuration

$ npx prisma migrate dev --name init
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

## Testing

- go to [http://localhost:3000/graphql](http://localhost:3000/graphql)
- sign up with graphql code below to get access token

```graphql
mutation signup($input:AuthInput!){
  signup(authInput:$input){
      access_token
  }
}
```
- check the picture below for more details

<p align="center">
  <a href="https://github.com/SofyanArdiansyah888/pos-backend/blob/staging/signup.png" target="blank"><img src="https://github.com/SofyanArdiansyah888/pos-backend/blob/staging/signup.png" width="900" height:"600" alt="Signup Image" /></a>
</p>

- add jwt token to tab HTTP HEADERS
```js
{
  "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoic29meWFuYXJkaWFueXNhaEBnbWFpbC5jb20iLCJpYXQiOjE2NjMwMTgyMjAsImV4cCI6MTY2NDMxNDIyMH0.MuVsMO1wIP652qcGx2VRnwz2MB-pQlH6yAC15Azw3gY"
}
```

- check the picture below for more details
<p align="center">
  <a href="https://github.com/SofyanArdiansyah888/pos-backend/blob/staging/signup.png" target="blank"><img src="https://github.com/SofyanArdiansyah888/pos-backend/blob/staging/products.png" width="900" height:"600" alt="Products Image" /></a>
</p>
- then you can enjoy the meal.


## Stay in touch

- Author - [Sofyan Ardiansyah]
- Website - [https://sofyanardiansyah888.vercel.app](https://sofyanardiansyah888.vercel.app)
- Linkedin - [sofyan-ardiansyah-06a1b4b2](https://www.linkedin.com/in/sofyan-ardiansyah-06a1b4b2/)

