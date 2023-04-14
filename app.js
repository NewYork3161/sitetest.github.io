const http = require("http");
const fs =   require("fs");

const port  = 3004;

const server = http.createServer(function(req,res){
res.writeHead(200, {'content-type': 'text/html'});
fs.readFile("index.html",function(error,data){

if(error){

res.writeHead(404);
res.write("Faild to load page");

}else{
  res.write(data);


}
res.end();

});



res.write("");



});


server.listen(port,  function(error){

if(error){

console.log("Some shit went wrong you asshole",error);

}else{

    console.log("All is well");
    console.log("Server is listing on ",port);
}



})