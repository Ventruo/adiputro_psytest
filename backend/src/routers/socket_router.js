const { io } = require("../setup/socketio");
const ClockSocket = require("./socket_routers/clock_socket");

let serverSocket,
  usersSocket = [];

// Listen from frontend
io.on("connection", (socket) => {
  if (socket.auth) {
    console.log("new client connected with id " + socket.id);
    serverSocket = socket;
    usersSocket.push(socket);
    ClockSocket(socket);
  }
});

function useSocket(callback) {
  if (serverSocket) {
    callback(serverSocket);
  }
}

function useUsersSocket(callback) {
  if (usersSocket.length > 0) {
    callback(usersSocket);
  }
}

module.exports = { useSocket, useUsersSocket };
