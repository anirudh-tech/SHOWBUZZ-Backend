import { producer } from "..";
import { MovieEntity } from "../../../domain/entities/movieEntity";

export const movieCreatedProducer = async (
    data: MovieEntity | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-theatre',
            messages: [{
                key: 'movieCreated',
                value: JSON.stringify(data)
            }]
        };
        await  producer.send(message);
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}