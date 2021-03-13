const http = require('http');
const port = 8000;
//module of nodejs used for file oprns 
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type' : 'text/html'});
    //fs -> filesystem
    //readfile -> inbuilt async function
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        //console.log(data);
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    
    if(err){
    console.log(err);
    }

    console.log("Server is running on port :",port);
});