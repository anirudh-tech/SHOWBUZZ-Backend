import { IDependencies } from "../../application/interfaces/IDependencies"
import { createGroupController } from "./createGroup"
import { getMessageController } from "./getMessage"
import { listGroupsController } from "./listGroups"

export const controllers = (dependencies: IDependencies) => {
  return {
    createGroup: createGroupController(dependencies),
    listGroups: listGroupsController(dependencies),
    getMessage: getMessageController(dependencies)
  }
}