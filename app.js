const express = require("express");
const { path } = require("express/lib/application");
const app = express();
// Add http server
const http = require("http");
const server = http.createServer(app);
// Add socket io
const socketio = require("socket.io");
const io = socketio(server);
//ejs

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
// Routes
app.get("/", (req, res) => {
  res.send("Hii");
});

server.listen(3000);
