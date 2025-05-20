// server.ts
import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // ✅ อนุญาตให้ทุก origin เชื่อมต่อ (ถ้าทดสอบ local)
  },
});

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("join", (name) => {
    console.log(`Mr.${name} enter to the chat`);
  });

  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
