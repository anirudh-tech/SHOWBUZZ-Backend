import { producer } from "..";
import { theatreData } from "../../../domain/entities/theatreDataEntity";

export const paymentDoneProducer = async (
    data: theatreData | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-theatre',
            messages: [{
                key: 'paymentCreated',
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