import { IUsersRepository } from "../repositories/interfaces/IUsersRepository"

class FindUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string) {
    const user = await this.usersRepository.find(Number(id))

    if(!user) {
      throw Error("User not found")
    }

    return user
  }
}

export { FindUserService }