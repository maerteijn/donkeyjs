import setupDOm from "jsdom-global"

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Template for testing</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`
setupDOm(html, { url: "http://localhost" })
