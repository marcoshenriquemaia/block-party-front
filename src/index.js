import { move } from "./gameRules/move.js";
import { renderFloor } from "./gameRules/renderFloor.js";
import { renderRank } from "./gameRules/renderRank.js";
import { renderRoom } from "./gameRules/renderRoom.js";
import { renderSelectAvatar } from "./gameRules/renderSelectAvatar.js";
import { floorListener } from "./listeners/floor.js";
import { updateRankListener } from "./listeners/updateRank.js";
import { updateRoomListener } from "./listeners/updateRoom.js";
import { userJoinListener } from "./listeners/userJoin.js";
import { userLeftListener } from "./listeners/userLeft.js";
import { imgDictionarie } from "./MOCKS/images.js";

const $color = document.querySelector(".color");
const $name = document.querySelector("#name");

let moveLeft,
  moveRight,
  moveDown,
  moveUp = false;

// const socket = new io('https://blockpartyapi.pikpicture.com');
const socket = new io('https://logs.sa.ngrok.io');
// const socket = new io('http://localhost:3334');

let currentRoom = null
let currentFloor = null

const $canvas = document.querySelector('.canvas')

const ctx = $canvas.getContext('2d')

socket.emit('join', {
  name: 'Player',
  avatar: 'dog',
  positionX: Math.floor(Math.random() * $canvas.width - 40),
  positionY: Math.floor(Math.random() * $canvas.height - 40),
});

window.addEventListener("keydown", ({ key }) => {
  if (key == "ArrowLeft" && !moveRight) {
    moveLeft = true;
  }
  if (key == "ArrowRight" && !moveLeft) {
    moveRight = true;
  }
  if (key == "ArrowUp" && !moveDown) {
    moveUp = true;
  }
  if (key == "ArrowDown" && !moveUp) {
    moveDown = true;
  }
});

window.addEventListener("keyup", ({ key }) => {
  if (key == "ArrowLeft" && !moveRight) {
    moveLeft = false;
  }
  if (key == "ArrowRight" && !moveLeft) {
    moveRight = false;
  }
  if (key == "ArrowUp" && !moveDown) {
    moveUp = false;
  }
  if (key == "ArrowDown" && !moveUp) {
    moveDown = false;
  }
});

const run = () => {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  move({ io: socket, moveLeft, moveRight, moveUp, moveDown });
  renderFloor({ ctx, floor: currentFloor });
  currentRoom && renderRoom(currentRoom, ctx)
}

setInterval(run, 15)

updateRoomListener({ io: socket, ctx }, (room) => {
  currentRoom = room
});

userJoinListener({ io: socket, ctx }, ({ room, currentFloor: newFloor}) => {
  currentRoom = room
  currentFloor = newFloor
  $color.style.backgroundColor = currentFloor.color
})

userLeftListener({ io: socket, ctx }, (room) => {
  currentRoom = room
})

floorListener({ io: socket, ctx }, (floor) => {
  currentFloor = floor
  $color.style.backgroundColor = floor.color
})

$name.addEventListener('input', () => {
  socket.emit('user:rename', $name.value);
})

renderSelectAvatar(socket)

updateRankListener({ io: socket, ctx }, (rank) => {
  renderRank(rank)
})