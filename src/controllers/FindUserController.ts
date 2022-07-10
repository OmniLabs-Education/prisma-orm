import { Response, Request } from "express";
import { database } from "../database";
import { UsersRepository } from "../repositories/UsersRepository";
import { FindUserService } from "../services/FindUserService";

export class FindUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findUser = new FindUserService(
      new UsersRepository()
    );

    const user = await findUser.execute(
      id
    )

    return response.json(user)
  }
}