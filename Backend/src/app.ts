import express from "express";
import dotenv from 'dotenv';
import { database } from "./config/database";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import "reflect-metadata"
import CategoryService from "./service/categoryService/categoryService";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRouter);

database.initialize() 
    .then(() => {
        console.log("Conexão estabelecida!");
        CategoryService.categoryService();
    })
    .catch((error) => console.log(error));
    
export default app;