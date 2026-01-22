import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            login: resolve(__dirname, 'login.html'),
          },
        },
      },
})