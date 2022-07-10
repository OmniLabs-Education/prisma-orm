import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  public async execute(name: string, email: string) {
    const user = await this.usersRepository.create(name, email)

    return user;
  }
}

export { CreateUserService }