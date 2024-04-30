import movieCreatedConsumer from "./consumers/movieCreatedConsumer";
import movieEditedConsumer from "./consumers/movieEditedConsumer";
import paymentCreatedConsumer from "./consumers/paymentCreatedConsumer";
import theatreCreatedConsumer from "./consumers/theatreCreatedConsumer";

export const createSubscriber = () => {
    return {
        theatreCreated: theatreCreatedConsumer,
        movieCreated: movieCreatedConsumer,
        movieEdited: movieEditedConsumer,
        paymentCreated: paymentCreatedConsumer,
    }
}