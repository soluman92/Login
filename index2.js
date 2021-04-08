const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    let filepath = path.join(__dirname,'public',req.url === '/' ? 'root.html' : req.url);
    let extname = path.extname(filepath);
    let contype = 'text/html'
    switch(extname){
        case '.js':
            contype = 'text/javascript';
            break;
        case '.css':
            contype = 'text/css';
            break;
        case '.json':
            contype = 'application/json';
            break;
        case '.png':
            contype = 'image/png';
            break;
        case '.jpg':
            contype = 'image/jpg';
            break;
    }
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'content-type':'text/html'});
                    res.end(content,'utf8');
                })
            }else{
                res.writeHead(500);
                res.end(`ServerErorr${err.code}`)
            }
        }else{
            res.writeHead(200,{'content-Type':contype});
            res.end(content,'utf8');
        }
    })
    // console.log(filepath);
    res.end();
})

const port = process.env.port || 5000;
server.listen(port,()=>console.log(`you port is ${port}`))