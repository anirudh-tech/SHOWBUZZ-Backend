import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "user-service",
    brokers:["pkc-6ojv2.us-west4.gcp.confluent.cloud:9092"],
    ssl: true,
    sasl: {
        username: "V43PWJPNNM2LS4DZ",
        password: "38zo91dmXSAfoqMxVV6+lQPajWxQKfknOstERYl8eNqsc5IWsYWzn7Kk/dgbtH+o",
        mechanism: 'plain'
    },
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "user-service-kafka-group"
})