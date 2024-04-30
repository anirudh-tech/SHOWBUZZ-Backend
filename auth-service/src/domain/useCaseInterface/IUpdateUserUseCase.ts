import { UserEntity } from "../entities";

export interface IUpdateUserUseCase {
  execute(id: string, username: string): Promise<UserEntity | null>
}