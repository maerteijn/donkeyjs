import Component from "../../../src/component.js"

class HelloWorld extends Component {
  template(state) {
    return `
      <h1>${state.title}</h1>
    `
  }
}

export default HelloWorld
