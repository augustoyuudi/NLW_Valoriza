import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "@repositories/TagsRepositories";

interface ICreateTagService {
  name: string,
}

class CreateTagService {
  async execute({ name } : ICreateTagService) {
    if (!name) {
      throw new Error("Invalid tag name");
    }

    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService }