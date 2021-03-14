const {createServer}= require('http');
const port=process.env.PORT||3000;
const requesHandler=(request,reponse)=>{
    console.log(request.url);
    reponse.end('Hello Word!');
}
const server= createServer(requesHandler);
server.listen(port,(err)=>{
    if(err){
        return console.lof('somthing had happened',err);
    }
    console.log(`server is listen on ${port}`);
});