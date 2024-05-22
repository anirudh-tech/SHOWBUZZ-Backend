import { IDependencies } from "../interfaces/IDependencies";

export const sendMessageUseCase = (dependencies: IDependencies) => {
  const {repositories: {sendMessage}} = dependencies;
  return {
    execute: async ({content, chatId, userId}: any) => {
      return await sendMessage({content, chatId, userId})
    }
  }
}