import { ObjectId, TypeExpressionOperatorReturningObjectId, Types } from "mongoose";
import { producer } from "..";

export const userCreatedProducer = async (
    data: {
        _id: Types.ObjectId;
        username: string;
        email: string;
        password:string;
        role: string;
    }
) => {
    try {
        await producer.connect()
        if(data.role === 'user' || data.role === 'admin'){
            const message = {
                topic: 'to-user',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
        } else if ( data.role === 'theatre') {
            const message = {
                topic: 'to-theatre',
                messages: [{
                    key: 'theatreCreated',
                    value: JSON.stringify(data)
                }]
            };
            await  producer.send(message);
        }
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}