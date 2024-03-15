import { producer } from "..";

export const theatreCreatedProducer = async (
    data: {
        username: string;
        email: string;
        password:string;
    }
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-theatre',
            messages: [{
                key: 'theatreCreated',
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