export default ()=>{
    return `<section class="py-20 md:pt-32">
          <div class="container mx-auto px-6 flex flex-col justify-center items-center gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Proyectos</h2>
            <section class="grid grid-cols-1  gap-5">
              <article class="shadow border rounded-md flex flex-col gap-7 bg-white p-5 max-w-sm">
                <section id="section_proyecto flex flex-col gap-4">
                  <h3 class="text-base md:text-xl text-blue-950 font-bold text-center pb-4">Lista de tareas</h3>
                  <p class="text-base md:text-lg pb-4 text-center">App para registrar, listar, actualizar y eliminar
                    tareas.
                    Incluye inicio de sesión y registro de usuarios.</p>
                </section>

                <section id="section_tecnologias" class="flex flex-col gap-4 ">
                  <h4 class="text-base md:text-xl text-blue-950 font-semibold text-center">Tecnologias</h4>
                  <ul class="flex flex-wrap gap-4 justify-center items-center">
                    <li class="flex flex-col  items-center">
                      <iconify-icon icon="logos:react" width="40" height="40"></iconify-icon>
                      <p>React.js</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:tailwindcss-icon" width="40" height="40"></iconify-icon>
                      <p>Tailwind</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:nodejs-icon" width="40" height="40"></iconify-icon>
                      <p>Node.js (Express)</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:mysql" width="40" height="40"></iconify-icon>
                      <p>MySQL</p>
                    </li>
                  </ul>
                </section>
                <section id="section_despliegue" class="flex flex-col gap-4">
                  <h4 class="text-base md:text-xl text-blue-950 text-center font-semibold">Despliegue</h4>
                  <ul class="flex flex-wrap gap-4 justify-center">
                    <li>
                      <iconify-icon icon="simple-icons:githubpages" width="40" height="40"></iconify-icon>
                    </li>
                    <li>
                      <iconify-icon icon="logos:aws" width="40" height="40"></iconify-icon>
                    </li>
                  </ul>
                </section>

                <div class="mb-3">
                  <a class="text-center font-bold block  mx-auto  bg-gradient-to-br from-blue-950 to-blue-400 hover:from-blue-900 hover:to-blue-300  text-white px-3 py-2 rounded"
                    href="https://javierq854.github.io/app-to-do-list/" target="_blank" rel="noopener noreferrer">Ver
                    proyecto</a>
                </div>
              </article>
            </section>
          </div>
        </section>`
}