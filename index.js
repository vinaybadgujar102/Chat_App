import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("message", (message) => {
    console.log("Received message:", message);
  });

  setInterval(() => {
    socket.emit("message", "Hello");
  }, 2000);
});

app.use("/", express.static("public"));

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
