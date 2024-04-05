import jsonServer from "json-server";
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = 8080;
 
server.use(middlewares); 
server.use(router);

server.listen(port,()=>{
    console.log(`server is started at port ${port}`);
})
