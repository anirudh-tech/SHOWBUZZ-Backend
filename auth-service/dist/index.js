"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./presentation/server"));
const dbConnection_1 = __importDefault(require("./infrastructure/database/dbConnection"));
const consumer_1 = require("./infrastructure/kafka/consumer");
//  test
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server_1.default;
        yield (0, dbConnection_1.default)()
            .catch((error) => {
            console.log(error === null || error === void 0 ? void 0 : error.message);
            process.exit();
        });
        yield (0, consumer_1.runConsumer)()
            .then(() => console.log("Kafka consumer is running"))
            .catch((error) => {
            console.error(`Error while initializing Kafka consumer: ${error}`);
            process.exit();
        });
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
    }
}))();
