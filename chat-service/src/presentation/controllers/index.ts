import { IDependencies } from "../../application/interfaces/IDependencies"
import { addToGroupController } from "./addToGroup"
import { allMessagesController } from "./allMessages"
import { createGroupController } from "./createGroup"
import { getMessageController } from "./getMessage"
import { listGroupsController } from "./listGroups"
import { sendMessageController } from "./sendMessage"

export const controllers = (dependencies: IDependencies) => {
  return {
    createGroup: createGroupController(dependencies),
    listGroups: listGroupsController(dependencies),
    getMessage: getMessageController(dependencies),
    addToGroup: addToGroupController(dependencies),
    sendMessage: sendMessageController(dependencies),
    allMessage: allMessagesController(dependencies),
  }
}