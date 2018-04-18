var http = require("http");

http.createServer(function(request, response) {
  // If no file specified, return index.html
  if (request.url === "/") {
    request.url = "/index.html";
    response.writeHead(302, {
      Location: "/index.html"
    });
  }
  
  response.end();
}).listen(3000);