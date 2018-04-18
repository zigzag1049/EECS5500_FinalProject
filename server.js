var http = require("http");
var fs = require("fs");

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

function sendFileContent(response, fileName, contentType) {
   if (contentType == null) {
      response.writeHead(500);
      response.write("Server error");
      response.end();
   } else {
      fs.readFile(fileName, function(err, data) {
         if (err) {
            response.writeHead(404);
            response.write("Not Found!");
            response.end();
         } else {
            response.writeHead(200, {
               "Content-Type": contentType
            });
            response.write(data);
            response.end();
         }
      });
   }
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
   sendFileContent(response, request.url.substring(1), getMIMEType(request.url));
}).listen(3000);