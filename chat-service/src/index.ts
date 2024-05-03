import server from "./presentation/server";
import DbConnection from "./infrastructure/database/DbConnection";
import { runConsumer } from "./infrastructure/kafka/consumer";

(async () => {
  try {
    server;
    await DbConnection();

    await runConsumer()
      .then(() => console.log("Kafka consumer is running"))
      .catch((error) => {
        console.error(`Error while initializing Kafka consumer: ${error}`);
        process.exit();
      });
  } catch (error) {
    console.log("Error on start up: ", error);
  } finally {
    process.on("SIGINT", async () => {
      console.log("\n\nServer is shutting down...");
      process.exit();
    });
  }
})(); 
