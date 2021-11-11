# Slim.js Demo
A web component demo with slim-js

## Development requirements

A recent  version of `NodeJS` (tested with v16.13).

## Development server

Setting up a development server is as simple as:
```bash
    npm install
    npm run dev
```

Then browse to [http://localhost:1234/](http://localhost:1234/)

## Linting

Eslint:
```bash
    npm run eslint
    npm run eslint:fix
```

The `Prettier` opinionated code formatter is used:
```bash
    npm run prettier
    npm run prettier:fix
```

## Tests
We have unit tests with `mocha`:
```bash
    npm run test
```


## Simple example

```javascript
import { Slim } from 'slim-js'


class HelloWorld extends Slim {
  constructor(name="from-constructor") {
    super()

    if (!this.hasOwnProperty("name")) {
      // the properties are bound before the constructor is called
      this.name = name
    }
  }
}

HelloWorld.template = /*html*/ `
  <h1>Hello {{this.name}}</h1>
`
customElements.define('hello-world', HelloWorld);

```