export const floorListener = ({ io }, callback) => {
  io.on('floor:update', (floor) => {
    callback(floor)
  })
}