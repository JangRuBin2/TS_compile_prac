import * as http from "http";
const server = http.createServer((req,res)=> {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end();
});

server.listen(8080,(err)=> {
  console.log(err)
})