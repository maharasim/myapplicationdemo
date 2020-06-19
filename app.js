var http=require('http');
var fs=require('fs');
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html' });
    var url=req.url;
    if(url==='/') {
        fs.readFile('first.html',function(err,hello){
            if(err)
               res.write("file not found");
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(hello);
                res.end();
            }
        
    }).listen(3000,function(){
        console.log("server started port:3000");
    });
}