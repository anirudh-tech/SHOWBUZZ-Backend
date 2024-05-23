import theatreEditedConsumer from "./consumers/theatreEditedConsumer"
import userEditedConsumer from "./consumers/userEditedConsumer"


export const createSubscriber = () => {
    return {
        userEdited: userEditedConsumer,
        theatreEdited: theatreEditedConsumer
    }
}