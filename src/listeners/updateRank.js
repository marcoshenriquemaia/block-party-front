export const updateRankListener = ({ io }, callback) => {
  io.on('room:rank', (rank) => {
    callback(rank)
  })
}