import { database } from "../config/database";
import Category from "../models/Category";

const categoryRepository = database.getRepository(Category);

export default categoryRepository;