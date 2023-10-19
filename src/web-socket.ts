import io from "socket.io-client";
export let webSocket;
if (process.env.NODE_ENV === "development") {
  // Code to run in development environment
  webSocket = io("http://localhost:5000");
} else {
  // Code to run in production environmentd
}
