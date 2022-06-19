export const RenderTime = (milisseconds) => {
  const $time = document.querySelector('.timer')

  const timer = setInterval(() => {
    $time.innerHTML = `${milisseconds / 1000}s`
    milisseconds -= 1000
    if (milisseconds <= 0) {
      setTimeout(() => clearInterval(timer), 1000)
    }
  }, 1000)
}