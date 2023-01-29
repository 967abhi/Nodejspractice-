const http = require('http'); 
 


http.createServer((req,resp)=>{
    resp.write("hello this is abhishek singh ");
    resp.end();
}).listen(4500);