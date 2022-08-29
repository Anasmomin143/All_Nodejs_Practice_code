const http = require("http");
http.createServer((req, res) => {

  if (req.url === "/") {
    res.write("Welcome to Home Page")
  }
  else if (req.url === "/profile") {
    res.write("Welcome to Profile Page")

  } else if (req.url === "/student") {
    res.write("Welcome to Student Page")
  }
  else if (req.url === "/profile/name") {
    res.write("Anas")
  } else {
    res.write("Invalid Request")
  }

  res.end();
}).listen(5000)