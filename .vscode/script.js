function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains('light')) {
  // html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }
  // save point creat
  //pegar a tag img 
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a img light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto do Mayke Brito sorrindo usando óculos escuros e jaqueta preta, sem barba e fundo colorido');
  } else {
    //se tiver sem light mode, adicionar a img normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto do Mayke Brito sorrindo usando óculos e camisa preta, barba e fundo amarelo');
   }
}