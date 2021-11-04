import { Slim } from "slim-js"

class HelloWorld extends Slim {
  constructor(name = "Default name from constructor") {
    super()
    if (!Object.prototype.hasOwnProperty.call(this, "myName")) {
      // the properties are bound before the constructor is called
      this.myName = name
    }
  }
}

HelloWorld.template = /*html*/ `
  <h1>Hello {{this.myName}}</h1>
`
customElements.define("hello-world", HelloWorld)

export default HelloWorld
