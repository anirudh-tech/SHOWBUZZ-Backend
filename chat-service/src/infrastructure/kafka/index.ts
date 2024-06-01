import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "user-service",
    brokers:["pkc-12576z.us-west2.gcp.confluent.cloud:9092"],
    ssl: true,
    sasl: {
        username: "EM4QHYEWIUV5YTZC",
        password: "6NweShZ2ummIJvFj0w79maopIn/uOYNENbHmZX0/+MNfYC7xPi3UlhCa384HcP0/",
        mechanism: 'plain'
    },
    authenticationTimeout: 5000
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "chat-service-kafka-group"
})