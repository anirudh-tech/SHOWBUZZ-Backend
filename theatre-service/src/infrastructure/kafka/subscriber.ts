import theatreCreatedConsumer from "./consumers/theatreCreatedConsumer";

export const createSubscriber = () => {
    return {
        theatreCreated: theatreCreatedConsumer
    }
}