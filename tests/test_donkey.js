import { assert } from "./utils.js"

import Donkey from "../src/donkey.js"
import HelloWorld from "../demo/js/components/helloworld.js"

describe("Test Donkey", () => {
  it("Test the Donkey registry", () => {
    const app = new Donkey("app")
    app.registerComponent(new HelloWorld("helloworld", { title: "Hello!" }))

    // it renders something to the dom
    assert.equal(document.querySelector("h1").textContent, "Hello!")
  })
})
