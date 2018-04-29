var http = require("http");
var fs = require("fs");

var ssi = require("ssi");

var inputDirectory = "./";
var outputDirectory = "./.ssi/";
var matcher = "/**/*.html";

var includes = new ssi(inputDirectory, outputDirectory, matcher);
includes.compile();

const FILETYPES = {
   "html":  "text/html",
   //"shtml": "text/html",
   "css":   "text/css",
   "js":    "text/javascript",
   "jpg":   "image/jpeg",
   "png":   "image/png",
   "gif":   "image/gif"
};

const FILEMATCH = /\/(?:[a-zA-Z0-9\/\-\_]*\.)*([a-z]*)$/;

function getMIMEType(url) {
   var match = url.match(FILEMATCH);
   if (match != null)
      return FILETYPES[match[1]];
   else
      console.error(`Cannot get filetype of ${url}.`);
      return "";
}

function sendFileContent(response, fileName) {
   var contentType = getMIMEType(fileName);
   if (contentType == null) {
      response.writeHead(500);
      response.write("Server error");
      response.end();
   } else {
      if (contentType == "text/html")
         fileName = ".ssi" + fileName;
      else
         fileName = "." + fileName;
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

   sendFileContent(response, request.url);
}).listen(3000);