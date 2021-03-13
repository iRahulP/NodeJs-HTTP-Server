const http = require('http');
const port = 8000;

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end("<h1 style='color: red'>Hola</h1>");
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    
    if(err){
    console.log(err);
    }

    console.log("Server is running on port :",port);
});