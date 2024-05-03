import { producer } from "..";


export const userEditedProducer = async (
    data: any | null
) => {
    try {
        await producer.connect()

        const message = {
            topic: 'to-auth',
            messages: [{
                key: 'userEdited',
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