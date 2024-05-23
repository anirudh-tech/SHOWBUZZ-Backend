import { producer } from "..";
import { ITheatreEntity } from "../../../domain/entities";
import { MovieEntity } from "../../../domain/entities/movieEntity";

export const theatreEditedProducer = async (
    data: ITheatreEntity | null
) => {
    try {
        await producer.connect()

        const messages : any = [{
            topic: 'to-auth',
            messages: [{
                key: 'theatreEdited',
                value: JSON.stringify(data)
            }]
        },
        {
            topic: 'to-payment',
            messages: [{
                key: 'theatreEdited',
                value: JSON.stringify(data)
            }]
        },
    ];
        await producer.sendBatch({topicMessages: messages})
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}