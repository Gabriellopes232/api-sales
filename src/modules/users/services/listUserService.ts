import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/usersRepository";
import User from "../typeorm/entities/user";

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);

    const products = userRepository.find();

    return products;
  }
}
