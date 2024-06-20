import express from "express";
import "reflect-metadata"
import dotenv from 'dotenv';
import { database } from "./config/database";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);

database.initialize() 
    .then(() => {
        console.log("Conexão estabelecida!");
    })
    .catch((error) => console.log(error));
    
export default app