class Component {
  constructor(name, state) {
    this.name = name
    this.state = state
  }

  template() {
    throw "No template defined on this object"
  }

  render() {
    return this.template(this.state)
  }
}

export default Component
