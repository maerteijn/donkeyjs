import { assert } from "./utils.js"

import "../src/js/components/helloworld.js"

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
})
