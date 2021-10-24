const LinksSocialMedia = {
  // cria um objeto com todos os usuarios das redes sociais
  github: 'joaogpp',
  youtube: 'channel/UCuVajlU1mh8Ry63KMNn4Tcw',
  facebook: 'joaovitorgruppo',
  instagram: '@joao.gruppo',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //armazena em li cada filho de ul(os li`s)
    const social = li.getAttribute('class') // armazena o conteudo de cada li
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) //fetch bate na api e pega a resposta, then prossegue com a funcao arrow (forma contraida de uma funcao, ela é anonima e usa o argumento com => armazena a resposta num .json)
}

getGitHubProfileInfos()
