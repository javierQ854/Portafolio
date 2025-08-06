export default ()=>{
    return `<section class="pt-20 md:pt-32">
          <div class="container mx-auto px-6 flex flex-col gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Tecnologías</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:javascript" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">JavaScript</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:react" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">React</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:angular-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Angular</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:nodejs-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Node.js</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:mysql" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">MySQL</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:java" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Java</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:spring-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Spring Boot</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:tailwindcss-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Tailwind</span>
              </div>
            </div>
          </div>
        </section> `
}