import './style.css'
import footer from './componentes/footer'
import header from './componentes/header'
import hero from './componentes/hero'
import about from './componentes/about'
import formacion from './componentes/formacion'
import experiencia from './componentes/experiencia'
import tecnologias from './componentes/tecnologias'
import proyectos from './componentes/proyectos'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
    duration: 800,
    once: false,
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', header())
    document.getElementById('hero').innerHTML = hero()
    document.getElementById('about').innerHTML = about()
    document.getElementById('formacion').innerHTML = formacion()
    document.getElementById('experiencia').innerHTML = experiencia()
    document.getElementById('tecnologias').innerHTML = tecnologias()
    document.getElementById('proyectos').innerHTML = proyectos()
    document.getElementById('footer').innerHTML = footer()
    

    const btn_menu = document.getElementById('menu_toggle')
    const menu = document.getElementById('menu_cabecera')
    const menuLinks = menu.querySelectorAll('a')

    btn_menu.addEventListener('click', () => {
        menu.classList.toggle('hidden')
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menu.classList.add('hidden')
            }
        })
    })
})
