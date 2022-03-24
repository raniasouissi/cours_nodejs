const { createServer } = require("http");

const server =createServer((Request,Response)=>{
    //Response.statusCode=200
   /// Response.setHeader("Content-type","text/html")
    //Response.write('welcome \n')
    //Response.write(Request.url)
    if (Request.url=="/home"){
        Response.statusCode=200
        Response.write("welcome from home")
    
    }else if (Request.url=="/contact"){
        Response.statusCode=200
        Response.write("welcome from contact")
    }else if  (Request.url=="/about"){
        Response.statusCode=200
        Response.write("welcome from about")}
    else{
        Response.statusCode=404
        Response.write("not found")
    }
    
    
    Response.end()
});

server.listen(3000,()=>{
    console.log("server running")
}
);