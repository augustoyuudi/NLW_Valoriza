import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";
import { UsersRepositories } from "@repositories/UsersRepositories";

interface ICreateComplimentInterface {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({tag_id, user_sender, user_receiver, message} : ICreateComplimentInterface) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (user_sender === user_receiver) {
      throw new Error("Cannot send compliment to yourself");
    }

    const receiver = await usersRepositories.findOne(user_receiver);
    const sender = await usersRepositories.findOne(user_sender);

    if (!receiver) {
      throw new Error("User receiver don`t exist");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService }