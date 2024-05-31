import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "auth-service",
    brokers:["https://psrc-81pvj7.us-west4.gcp.confluent.cloud"],
    ssl: true,
    sasl: {
        username: "V43PWJPNNM2LS4DZ",
        password: "38zo91dmXSAfoqMxVV6+lQPajWxQKfknOstERYl8eNqsc5IWsYWzn7Kk/dgbtH+o",
        mechanism: 'plain'
    },
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "auth-service-kafka-group"
})