
export const move = ({ io, moveLeft, moveRight, moveUp, moveDown }) => {
  moveLeft && io.emit('move', { direction: 'left' });
  moveRight && io.emit('move', { direction: 'right' });
  moveUp && io.emit('move', { direction: 'up' });
  moveDown && io.emit('move', { direction: 'down' });
};
