import { IDependencies } from "../../application/interfaces/IDependencies"
import { listUsersController } from "./listUsers"
import { updateStatusController } from "./updateStatus"

export const controllers = (dependencies: IDependencies) => {
  return {
      listUsers: listUsersController(),
      updateStatus: updateStatusController(dependencies)
  }
}