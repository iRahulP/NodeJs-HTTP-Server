const http = require('http');

const port = 8000;

function requestHandler(req, res){
    console.log(req.url);
    res.end("Hola");
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    
    if(err){
    console.log(err);
    }

    console.log("Server is running on port :",port);
});