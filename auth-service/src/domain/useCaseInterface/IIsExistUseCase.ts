import { UserEntity } from "../entities";

export interface IIsExistUseCase {
    execute(token: string): Promise <UserEntity | null>
}