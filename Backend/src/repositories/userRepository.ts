import { database } from "../config/database";
import User from "../models/User";

const userRepository = database.getRepository(User);

export default userRepository;