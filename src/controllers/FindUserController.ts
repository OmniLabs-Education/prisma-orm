import { Response, Request } from "express";
import { database } from "../database";

export class FindUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await database.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    return response.json(user)
  }
}