export const userLeftListener = ({ io }, callback) => {
  io.on('user:left', (room) => {
    callback(room)
  })
}