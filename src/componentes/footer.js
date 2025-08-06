export default () => {
    return `<div class="bg-blue-950 text-white py-3">
        <div class="flex flex-col items-center gap-5 md:flex-row md:justify-between md:px-5 md:items-center">
          <p class="text-center md:text-left">&copy; 2025 Javier Danilo Parra Quiñones. Todos los derechos reservados.
          </p>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="mdi:github" width="24" height="24"></iconify-icon>
              <a href="https://github.com/javierQ854" target="_blank" rel="noopener noreferrer"
                class="hover:text-gray-400">GitHub</a>
            </div>
            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="mdi:linkedin" width="24" height="24"></iconify-icon>
              <a href="https://www.linkedin.com/in/javierdaniloparra/" target="_blank" rel="noopener noreferrer"
                class="hover:text-gray-400">LinkedIn</a>
            </div>

            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="ic:baseline-email" width="24" height="24"></iconify-icon>
              <a href="mailto:javierdaniloparraquinones@gmail.com" class="hover:text-gray-400">Email</a>
            </div>
          </div>
        </div>
      </div>`
}