import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../models/User";
import projectRepository from "../../repositories/projectRepository";
import Project from "../../models/Project";

class GetUserService {
  static async activateUser(userId: Long) {
    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    user.active = true;

    await userRepository.save(user);

    return user;
  }

  static async getUserService(userId: Long) {
    const user = await userRepository.findOneBy({id: userId}) as User;

    const projects = await projectRepository.find({where: {user: user}}) as Project[];

    console.log(projects);
    
    console.log(user);

    return { user, projects };
  }
}

export default GetUserService;
