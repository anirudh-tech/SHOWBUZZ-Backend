import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "auth-service",
    brokers:["34.93.145.38:9092"],
    
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "auth-service-kafka-group"
})