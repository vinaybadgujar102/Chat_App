var socket = io();

let btn = document.querySelector("#btn");
let inputMsg = document.querySelector("#newmsg");
let msgList = document.querySelector("#msglist");

btn.onclick = function exec() {
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let limsg = document.createElement("li");
  limsg.innerText = data.msg;
  console.log(data.msg);

  msgList.appendChild(limsg);
});
