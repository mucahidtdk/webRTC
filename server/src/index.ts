import express,{Express,Request,Response} from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';

import {roomHandler} from './socket/index';

const port = 3001;

const app : Express = express();
app.use(cors)
const server = http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log("a user connected");
    roomHandler(socket);
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
})

app.get("/",(req:Request,res:Response)=>{
    console.log(req.query);
    res.send("hiia");
})

server.listen(port,()=>{
    console.log("start");
})