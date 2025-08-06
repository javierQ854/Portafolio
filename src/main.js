import './style.css'

const btn_menu = document.getElementById('menu_toggle')
const menu = document.getElementById('menu_cabecera')
const menuLinks = menu.querySelectorAll('a');

btn_menu.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menu.classList.add('hidden')
    }
  })
})
