import { DataSource } from "typeorm";
import User from "../models/User";
import Project from "../models/Project";
import Image from "../models/Image";

export const database = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Project, Image],
    migrations: [`${__dirname}/../migrations/*.{ts,js}`],
})
