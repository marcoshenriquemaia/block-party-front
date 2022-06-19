export const renderRank = (usersRank) => {
  const $rank = document.getElementById('rank')

  $rank.innerHTML = ''
  
  usersRank.forEach((user) => {
    const $user = document.createElement('div')
    $user.classList.add('user')
    $user.textContent = `${user.score} - ${user.name}`

    $rank.appendChild($user)
  })
}