// backend/src/socket/socket.ts
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Permitir el front-end
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const userSocketMap: { [key: string]: string } = {};

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId as string;

  if (userId) userSocketMap[userId] = socket.id;

  // Emitir usuarios online a todos los conectados
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // Emitir las conversaciones actuales cuando un usuario se conecta
  io.emit("updateConversations", {
    message: "Actualización de conversaciones",
    users: Object.keys(userSocketMap),
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
