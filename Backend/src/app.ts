import express from "express";
import "reflect-metadata"
import dotenv from 'dotenv';
import { database } from "./config/database";
import cors from "cors";
import indexRouter from "./routes/indexRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRouter);

database.initialize() 
    .then(() => {
        console.log("Conexão estabelecida!");
    })
    .catch((error) => console.log(error));
    
export default app