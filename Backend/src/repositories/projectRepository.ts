import { database } from "../config/database";
import Project from "../models/Project";

const projectRepository = database.getRepository(Project);

export default projectRepository;
