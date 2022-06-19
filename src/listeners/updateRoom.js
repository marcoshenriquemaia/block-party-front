import { renderRoom } from "../gameRules/renderRoom.js";

export const updateRoomListener = ({ io }, callback) => {
  io.on('room:update', (room) => {
    callback(room)
  })
}