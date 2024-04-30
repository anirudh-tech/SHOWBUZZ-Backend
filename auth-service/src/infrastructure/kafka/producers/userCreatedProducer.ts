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
            const messages : any = [{
                topic: 'to-user',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: 'to-payment',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            }];
            await producer.sendBatch({topicMessages: messages})
        } else if ( data.role === 'theatre') {
            const messages : any = [{
                topic: 'to-theatre',
                messages: [{
                    key: 'theatreCreated',
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: 'to-payment',
                messages: [{
                    key: 'theatreCreated',
                    value: JSON.stringify(data)
                }]
            }];
            await producer.sendBatch({topicMessages: messages})
        }
    } catch (error: any) {
        console.error('kafka produce error', error?.message);
    } finally {
        await producer.disconnect();
    }
}