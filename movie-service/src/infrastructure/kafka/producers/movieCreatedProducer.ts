import { producer } from "..";
import { MovieEntity } from "../../../domain/entities/movieEntity";

export const movieCreatedProducer = async (
    data: MovieEntity | null
) => {
    try {
        await producer.connect()

        const messages = [{
            topic: 'to-theatre',
            messages: [{
                key: 'movieCreated',
                value: JSON.stringify(data)
            }]
        },{
            topic: 'to-payment',
            messages: [{
                key: 'movieCreated',
                value: JSON.stringify(data)
            }]
        }];
        await producer.sendBatch({topicMessages: messages})
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}