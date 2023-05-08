import express from "express";
import * as dotenv from 'dotenv'
import { userRouter, studentRouter } from "./routers/index.js";
dotenv.config()
import connect from "./database/database.js";

const app = express()


app.use(express.json())
const port = process.env.PORT || 3000

//router

app.use('/users', userRouter)
app.use('/students', studentRouter)

app.get('/', (req,res)=>{
    res.send('response from root router, haha')
})

app.listen(port, async ()=>{
    await connect()
    console.log(`listen on port : ${port}`);
}) 
