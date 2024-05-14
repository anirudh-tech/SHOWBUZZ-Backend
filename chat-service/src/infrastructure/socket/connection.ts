import { Server as SocketIOServer, Socket } from "socket.io";
import { Server } from "http";



const socket = require("socket.io");

const connectSocketIo = (server: Server) => {
  const io: Socket = socket(server, {
    cors: {
      origin: [
        process.env.FRONT_END_URL
      ],
      credentials: true,
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected`);
    socket.on("disconnect", () => {
      console.log(`Socket disconnected`);
    });
  });
};

export default connectSocketIo;
