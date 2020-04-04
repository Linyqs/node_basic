const http = require("http")
const fs = require('fs')
const url = require('url')
const querystring = require("querystring")
http.createServer(function(request, response) {
    const parseUrl = url.parse(request.url)
    if(parseUrl.pathname == '/favicon.ico') {
        response.writeHead(200)
        response.end();
        return
    }
    response.writeHead(200);

    fs.createReadStream(__dirname + '/pages/hello.html').pipe(response)
})
.listen(3000)