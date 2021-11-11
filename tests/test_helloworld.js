import { assert } from "./utils.js"

import "../src/js/components/helloworld.js"
import { processDOM } from "slim-js"
import "slim-js/property-directive"

describe("HelloWorld Component", () => {
  it("The Helloworld component renders the name properly", () => {
    document.body.innerHTML = "<hello-world></helloworld>"

    return customElements.whenDefined("hello-world").then(() => {
      const element = document.querySelector("hello-world")
      const h1 = element.shadowRoot.firstChild
      assert.instanceOf(h1, HTMLElement)
      assert.equal(
        h1.firstChild.textContent,
        "Hello Default name from constructor"
      )
      element.myName = "My adjusted name!"
      assert.equal(h1.firstChild.textContent, "Hello My adjusted name!")
    })
  })

  it("The Helloworld component name can be updated with a property", () => {
    const div = document.createElement("div")
    const data = {
      parentName: "I'm the parent",
    }
    div.innerHTML = /*html*/ `<hello-world .my-name="{{this.parentName}}"></hello-world>`

    return customElements.whenDefined("hello-world").then(() => {
      const { flush } = processDOM(data, div)
      flush()
      assert.equal(div.innerHTML, "<hello-world></hello-world>")

      const element = div.querySelector("hello-world")
      assert.equal(element.myName, data.parentName)
    })
  })
})
