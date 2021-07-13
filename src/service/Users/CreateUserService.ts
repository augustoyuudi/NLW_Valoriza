import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string,
  email: string,
  password: string,
  admin?: boolean,
}

class CreateUserService {
  async execute({name, email, password, admin} : IUserRequest) {
    if (!email) {
      throw new Error("Incorrect email");
    }

    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }