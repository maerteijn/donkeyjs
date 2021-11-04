class Donkey {
  constructor(selector) {
    this.appElement = document.querySelector(`#${selector}`)
    this.components = {}
  }

  registerComponent(component) {
    this.components[component.name] = component
    this.render()
  }

  render() {
    if (this.components) {
      const rendered = Object.values(this.components).map(component =>
        component.render()
      )
      this.appElement.innerHTML = rendered.join("")
    }
  }
}

export default Donkey
