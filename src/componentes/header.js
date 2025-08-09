export default () => {
  return `
  <section class="bg-blue-950 border-none text-white py-5 px-4 lg:flex fixed z-50 w-screen ">
    <div class="container mx-auto flex justify-between">
      <h1 class="text-base md:text-2xl">DESARROLLADOR</h1>
      <iconify-icon id="menu_toggle" class="lg:hidden cursor-pointer" icon="material-symbols:menu" width="24" height="24"></iconify-icon>
    </div>
    <nav id="menu_cabecera" class=" hidden flex flex-col text-center gap-5 pt-4 lg:flex lg:pt-0 lg:flex-row lg:gap-5">
        <a class="hover:underline" href="#hero">Inicio</a>
        <a class="hover:underline" href="#about">Perfil</a>
        <a class="hover:underline" href="#formacion">Formacion</a>
        <a class="hover:underline" href="#experiencia">Experiencia</a>
        <a class="hover:underline" href="#tecnologias">Tecnologías</a>
        <a class="hover:underline" href="#proyectos">Proyectos</a>
      </nav>
  </section>`
}