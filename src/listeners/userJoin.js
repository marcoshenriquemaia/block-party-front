export const userJoinListener = ({ io }, callback) => {
  io.on('user:join', (response) => {
    callback(response)
  })
}