import { Slim } from "slim-js"

import "./js/components/helloworld.js"
import "slim-js/property-directive"

class MyApp extends Slim {
  constructor() {
    super()
    this.myAppName = "My Name!"
  }
}

const template = /*html*/ `
  <hello-world my-name="{{this.myAppName}}"></hello-world>
`

// this also calls customElements.define method
Slim.element("my-app", template, MyApp)
