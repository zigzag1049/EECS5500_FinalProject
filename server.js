var http = require("http");

const FILETYPES = {
  "html":  "text/html",
  "shtml": "text/html",
  "css":   "text/css",
  "js":    "text/javascript",
  "jpg":   "image/jpeg",
  "png":   "image/png",
  "gif":   "image/gif"
};

function getMIMEType(url) {
  return FILETYPES[url.match(/\/(?:[a-zA-Z0-9\/]*\.)*([a-z]*)$/)[1]];
}

http.createServer(function(request, response) {
  // If no file specified, return index.html
  if (request.url === "/") {
    request.url = "/index.html";
    response.writeHead(302, {
      Location: "/index.html"
    });
  }

  console.log(getMIMEType(request.url));
  response.end();
}).listen(3000);