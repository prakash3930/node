const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {

    const error = fs.writeFileSync('data.txt','this is Write File');
    const readFile = fs.readFileSync('Error.html','utf-8');
    
    if(req.url =='/'){
        if(error){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('file Write Failed');
        res.end();    
        }    
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('File Write Success');
            res.end()
        }   
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(readFile);
        res.end();   
    }
});

myServer.listen(port,hostName,()=>{
console.log(`Server is Running Successfully at : http://${hostName}:${port}`);
});