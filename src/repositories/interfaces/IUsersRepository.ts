import { User } from "@prisma/client";

export interface IUsersRepository {
  create(name: string, email: string): Promise<User>;
  find(id: number): Promise<User | null>
}