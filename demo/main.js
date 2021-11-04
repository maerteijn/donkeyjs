import Donkey from "../src/donkey.js"
import HelloWorld from "./js/components/helloworld.js"

const app = new Donkey("app")

app.registerComponent(new HelloWorld("helloworld", { title: "Hello!" }))
