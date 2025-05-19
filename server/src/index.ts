import { createServer } from "http";
import { Server } from "socket.io";

// Create an HTTP server
const server = createServer();

// Create a new Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Handle connections
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
