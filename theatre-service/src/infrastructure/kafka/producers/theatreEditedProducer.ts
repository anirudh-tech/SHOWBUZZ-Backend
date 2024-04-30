import { producer } from "..";
import { ITheatreEntity } from "../../../domain/entities";
import { MovieEntity } from "../../../domain/entities/movieEntity";

export const theatreEditedProducer = async (
    data: ITheatreEntity | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-payment',
            messages: [{
                key: 'theatreEdited',
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