// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");

// //cors is used for debugging the new  netwrok request modules

// app.use(cors());
// //  const io . orgin accepts the server request
// // if we want to use another device change the origins and the cors method

// const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET","POST"],
//     },
// })
// //emitting the event

// io.on("connection", (socket) => {
//     console.log(`USER_CONNECTED ${socket.id}`);

//     socket.on("join_room", (data) => {
//         socket.join(data)
//         console.log(`USER WITH ID: ${socket.id} joined room : ${data}`)
//     });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
// });
   
//     socket.on("disconnect", () => {
//         console.log("USER_DISCONNECTED", socket.id)
//     });

// });




// server.listen(3001, () => {
//     console.log("SERVER_RUNNING......")
// })
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
