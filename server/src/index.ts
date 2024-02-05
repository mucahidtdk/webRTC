import express,{Express,Request,Response} from 'express';
import http from 'http';
import "dotenv/config";
import mongoose from 'mongoose';
import { readdirSync } from 'fs';
const app : Express = express();

const server = http.createServer(app)
app.use(express.json());
app.get("/",(req:Request,res:Response)=>{
    console.log(req.query);
    res.send("hiia");
})
readdirSync(__dirname+"/routes").map(async (r) => app.use("/api", (await import(__dirname+`/routes/${r}`)).default));



mongoose.connect(process.env.DB_STR as string).then(() => {
    server.listen(process.env.PORT as string,()=>{
        console.log("start");
    })
}).catch((err) => {
    console.log("mongo error ", err)
});


