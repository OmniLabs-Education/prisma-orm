import { Response, Request } from "express";
import { database } from "../database";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const createUser = new CreateUserService(new UsersRepository());

    const user = await createUser.execute(
      name,
      email
    )

    return response.json(user)
  }
}