import { assert } from "./utils.js"

import HelloWorld from "../demo/js/components/helloworld.js"

describe("HelloWorld Component", () => {
  it("The Helloworld component renders something", () => {
    const helloworld = new HelloWorld("helloworld", { title: "Hello!" })
    assert.include(helloworld.render(), "<h1>Hello!</h1>")
  })
})
