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
const userSocketMap = {};
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId)
        userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    // Escuchar el evento 'newUserRegistered' emitido por un cliente
    socket.on("newUserRegistered", (user) => {
        console.log("Servidor recibió newUserRegistered:", user); // Log de depuración
        io.emit("newUserRegistered", user); // Emitir a todos los clientes conectados
    });
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});
export { app, io, server };
