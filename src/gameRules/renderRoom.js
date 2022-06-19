import { imgDictionarie } from "../MOCKS/images.js";

export const renderRoom = (room, ctx) => {
  const users = room.users;

  users.forEach((user) => {
    const { positionY, positionX, avatar, name } = user;
    const width = 40;
    const height = 40;
    const img = new Image();
    img.src = imgDictionarie[avatar];
    ctx.drawImage(img, positionX, positionY, width, height);
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(name, positionX, positionY + height + 20, width, height);
  });
};
