import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();

let count: number = 0;

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("emit", (data) => {
    count++;
    // Broad cast updated count to all clients
    io.emit("count", { count });  
    console.log("Count updated:", count);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
