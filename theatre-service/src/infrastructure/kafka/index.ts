import { Kafka, Producer, Consumer } from "kafkajs";

// export const kafka = new Kafka({
//     clientId: "theatre-service",
//     brokers:["34.93.145.38:29092"],
// })

const kafka = new Kafka({
    clientId: 'theatre-service',
    brokers: ['pkc-4j8dq.southeastasia.azure.confluent.cloud:9092'],
    ssl: true,
    sasl: {
      mechanism: 'plain',
      username: 'AH3AIXDBMRITWY2S',
      password:'PTTwXBptxZjyOa3DLtmSIjgC3mg8AZG8o1MB0pShQvbNX7bTC07O8HcgLAi+sqUj',
    },
    connectionTimeout: 30000, 
      authenticationTimeout: 30000, 
  
  });

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "theatre-service-kafka-group"
})