import movieCreatedConsumer from "./consumers/movieCreatedConsumer";
import theatreCreatedConsumer from "./consumers/theatreCreatedConsumer";

export const createSubscriber = () => {
    return {
        theatreCreated: theatreCreatedConsumer,
        movieCreated: movieCreatedConsumer
    }
}