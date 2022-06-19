export const renderFloor = ({ ctx, floor }) => {
  if (!floor) return 
  floor.scenery.forEach((item) => {
    const { x, y } = item.position
    const width = item.width ;
    const height = item.height ;
    const color = item.color ;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  })
}