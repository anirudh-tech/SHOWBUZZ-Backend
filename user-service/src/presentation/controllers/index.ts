import { IDependencies } from "../../application/interfaces/IDependencies"
import { listUsersController } from "./listUsers"
import { listUserWithId } from "./listUserWithId"
import { updateStatusController } from "./updateStatus"
import { updateUserController } from "./updateUser"

export const controllers = (dependencies: IDependencies) => {
  return {
      listUsers: listUsersController(),
      updateStatus: updateStatusController(dependencies),
      listUserWithId: listUserWithId(),
      updateUser: updateUserController(dependencies)
  }
}