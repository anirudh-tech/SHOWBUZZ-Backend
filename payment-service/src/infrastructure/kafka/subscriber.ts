import movieCreatedConsumer from "./consumers/movieCreatedConsumer";
import movieEditedConsumer from "./consumers/movieEditedConsumer";
import theatreCreatedConsumer from "./consumers/theatreCreatedConsumer";
import theatreEditedConsumer from "./consumers/theatreEditedConsumer";
import userCreatedConsumer from "./consumers/userCreatedConsumer";

export const createSubscriber = () => {
    return {
        theatreCreated: theatreCreatedConsumer,
        theatreEdited: theatreEditedConsumer,
        movieCreated: movieCreatedConsumer,
        movieEdited: movieEditedConsumer,
        userCreated: userCreatedConsumer,
    }
}