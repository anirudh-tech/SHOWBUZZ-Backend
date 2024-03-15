import userCreatedConsumer from "./consumers/userCreatedConsumer";

export const createSubscriber = () => {
    return {
        userCreated: userCreatedConsumer
    }
}