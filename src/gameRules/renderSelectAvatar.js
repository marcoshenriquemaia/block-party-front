import { imgDictionarie } from "../MOCKS/images.js"

export const renderSelectAvatar = (io) => {
  const $avatarList = document.querySelector('.avatar-list')
  const images = Object.keys(imgDictionarie).map(item => ({
    url: imgDictionarie[item],
    name: item
  }));

  images.forEach(item => {
    const $img = document.createElement('img');
    $img.src = item.url;
    $img.classList.add('avatar');

    $img.addEventListener('click', () => {
      io.emit('user:avatar', item.name);
    })

    $avatarList.appendChild($img);
  })
}