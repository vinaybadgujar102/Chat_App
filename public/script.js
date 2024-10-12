var socket = io();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  socket.emit("message", "Hello from client!");
});

socket.on("message", (message) => {
  console.log("Received message:", message);

  const div = document.createElement("div");
  div.innerText = "new event from server: ";
  document.body.appendChild(div);
});
