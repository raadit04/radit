// server.js
const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Dummy data for video streaming (replace with your actual camera streaming logic)
  const dummyVideoStream = generateDummyVideoStream();

  // Send dummy video data to the connected client
  ws.send(JSON.stringify({ type: "video", payload: dummyVideoStream }));

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Dummy function to generate video stream data (replace with actual camera streaming logic)
function generateDummyVideoStream() {
  // ... (implementation details)
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
