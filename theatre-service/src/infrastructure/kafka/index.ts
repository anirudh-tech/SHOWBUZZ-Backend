import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "theatre-service",
    brokers:["34.93.145.38:29092"],
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "theatre-service-kafka-group"
})