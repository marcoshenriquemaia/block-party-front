export const timerListener = ({ io }, callback) => {
  io.on('room:time', callback)
}