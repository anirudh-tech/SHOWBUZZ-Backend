import userEditedConsumer from "./consumers/userEditedConsumer"


export const createSubscriber = () => {
    return {
        userEdited: userEditedConsumer,
    }
}