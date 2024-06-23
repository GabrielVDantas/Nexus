import { DataSource } from "typeorm";
import User from "../models/User";
import Project from "../models/Project";
import Category from "../models/Category";
import CoverArt from "../models/Images/CoverArt";
import Screenshot from "../models/Images/Screenshot";

export const database = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Project, CoverArt, Screenshot, Category],
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
});
