// const person = require('./person');
// const per1 = new person('Doaa',"23");
// per1.show();

// const logger = require('./logger');
// const relog = new logger();

// relog.on('message',(data)=>console.log('Your destiny is ',data));

// relog.jol('I Got it eventually!!!')

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','root.html'),(err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200,{'content-type':'text/html'});
    //         res.write(content);
    //         res.end()
    //     })
    // }
    // if(req.url === '/signin'){
    //     fs.readFile(path.join(__dirname,'public','signin.html'),(err,cont)=>{
    //         if(err)throw err;
    //         res.writeHead(200,{'content-Type':'text/html'});
    //         res.write(cont);
    //         res.end()
    //     })
    // }
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         if(err)throw err;
    //         res.write(content);
    //         res.end()
    //     })
    // }
    // const users = require('./public/api')
    // if(req.url === '/apis'){
    //     // fs.readFile(path.join(__dirname,'public','api.js'),(err,content)=>{
    //     //     if(err)throw err;
    //     //     res.writeHead(200,{'content-type':'application/json'});
    //     //     res.write(JSON.stringify(content));
    //     //     res.end()
    //     // })
    //     res.writeHead(200,{'content-Type':'text/html'});    //application/json
    //     res.write(JSON.stringify(users));
    //     // res.end(JSON.stringify(users));
    //     res.end();
    // }
    // let users = require('./public/api');
    let pathfile = path.join(__dirname,'public',req.url === '/' ? 'root.html': req.url );
    let extname = path.extname(pathfile);
    let contentType = 'text/html';
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
    }
    fs.readFile(pathfile,(err,content)=>{
        if(err){
            if(err.code === 'ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'content-Type':'text/html'});
                    res.end(content,'utf8');
                })
            }else{
                res.write(500);
                res.end(`serverError${err.code}`);
            }
        }else{
            res.writeHead(200,{'content-Type': contentType });
            res.end(content,'utf8');
        }
    })
})

const port = process.env.port || 3000;

server.listen(port,()=>console.log(`your port is ${port}`))