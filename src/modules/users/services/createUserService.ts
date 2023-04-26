import { getCustomRepository } from "typeorm";
import ApiError from "../../../util/errors/api-error";
import User from "../typeorm/entities/user";
import UserRepository from "../typeorm/repositories/usersRepository";

interface RequestProps {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: RequestProps): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new ApiError
    }

    const user = userRepository.create({
      name,
      email,
      password,
    })

    await userRepository.save(user);

    return user;
  }
}
