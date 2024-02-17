import express from 'express';
const PORT = process.env.PORT || 10000;
const app = express()
import {router} from './routes.js';


app.use('/',router)

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT)
})
