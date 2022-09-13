<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="https://graphql.org/img/brand/logos/logo.svg" width="200" alt="Graphql Logo" /></a>
</p>


  
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>
 

## Description

Simple point of sales demo app service build with NestJS, Graphql, Postgres and Prisma

## Installation

```bash
$ npm install

# change variable DATABASE_URL at .env file

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
- sign up with graphql code below
```graphql
mutation signup($input:AuthInput!){
  	signup(authInput:$input){
    	access_token
  	}
}
```



## Stay in touch

- Author - [Sofyan Ardiansyah]
- Website - [https://sofyanardiansyah888.vercel.app](https://sofyanardiansyah888.vercel.app)
- Linkedin - [sofyan-ardiansyah-06a1b4b2](https://www.linkedin.com/in/sofyan-ardiansyah-06a1b4b2/)

