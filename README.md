## Repo for code from javaguides.net Node.js, Express and MongoDB RESTful CRUD API Tutorial 

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://ne0crank.github.io/kentmschaeffer)

Welcome to the first public Node MongoDB Express app server from ne0crank

## Table of Contents

- [Intro](#intro)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Intro

This project was created from reading the instructions from this [website](https://www.javaguides.net/2020/02/nodejs-express-and-mongodb-restful-crud-api-tutorial.html) without cheating and looking at this [GitHub Repo](https://github.com/RameshMF/node-todo-app).

## Background

## Install

This project uses [node](http://nodejs.org), [express](https://www.npmjs.com/package/express), [mongo](https://mongodb.com/), [mongoose](https://www.npmjs.com/package/mongoose), and [body-parser](https://www.npmjs.com/package/body-parser). Go check them out if you don't have them locally installed.

```sh
$ npm install express body-parser mongoose --save
```

## Usage

Please use at your own risk, this is my first **completed** project!

## API

**Create a new entry using Postman:**

Request: POST 
URL: http://localhost:3300/todos
BODY: Raw, JSON
TEXT:
{
  "name": "Learning Node.js",
  "description": "Learning Node.js with an example"
}

** Retrieve all entries using Postman:**

Request: GET 
URL: http://localhost:3300/todos

** Retrieve single entry with ID using Postman:**

Request: GET 
URL: http://localhost:3300/todos/:id

**Update an existing entry with ID using Postman:**

Request: PUT 
URL: http://localhost:3300/todos/:id
BODY: Raw, JSON
TEXT:
{
  "name": "Learning Node.js and Express",
  "description": "Learning Node.js with an example"
}

** Delete single entry with ID using Postman:**

Request: DELETE 
URL: http://localhost:3300/todos/:id


### Maintainers

[@ne0crank](https://github.com/ne0crank).

## Contributing

See [the contributing file](CONTRIBUTING.md)!

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

### Any optional sections

## License

[MIT](LICENSE) © Kent M. Schaeffer
