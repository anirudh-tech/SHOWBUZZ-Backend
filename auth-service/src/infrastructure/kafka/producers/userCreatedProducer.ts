import { producer } from "..";

export const userCreatedProducer = async (
    data: {
        username: string;
        email: string;
        password:string;
    }
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-user',
            messages: [{
                key: 'userCreated',
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