import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "payment-service",
    brokers:["localhost:29092"]
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "payment-service-kafka-group"
})