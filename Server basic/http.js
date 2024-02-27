let http = require("http");
let ourApp = http.createServer(function (req, res) {
  if (req.url == "/about") {
    res.end("hello welcome to our about page");
  }
  res.end("Hello dog");
});
ourApp.listen(3000);
