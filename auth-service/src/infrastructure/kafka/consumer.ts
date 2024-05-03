import { consumer } from ".";
import { createSubscriber } from "./subscriber";

export const runConsumer = async () => {
    try {
        await consumer.connect()

        await consumer.subscribe({
            topic: 'to-auth',
            fromBeginning: true
        })
        const subscriber: any = createSubscriber()
        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message
                console.log(key,'🚀🚀🚀🚀🚀🚀🚀');
                const subscriberMethod = String(key)
                const subscriberData = JSON.parse(String(value))

                try{
                    await subscriber[subscriberMethod](subscriberData);
                } catch(error: any) {
                    throw new Error(error?.message)
                }
            }
        })
    } catch (error: any) {
        throw new Error(error?.message)
    }
}

export const stopConsumer = async () => {
    await consumer.stop()
    await consumer.disconnect()
}