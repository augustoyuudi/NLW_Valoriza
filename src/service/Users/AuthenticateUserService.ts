import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserService {
  email: string,
  password: string,
}

class AuthenticateUserService {
  async execute({email, password} : IAuthenticateUserService) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const isSamePassword = await compare(password, user.password);

    if (!isSamePassword) {
      throw new Error("Email/password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },

      "3a311c37535a27dae813714ea313ed0f",

      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService }