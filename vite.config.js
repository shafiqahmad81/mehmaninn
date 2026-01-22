import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path"
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            login: resolve(__dirname, 'login.html'),
            register: resolve(__dirname, 'register.html'),
            about: resolve(__dirname, 'about.html'),
            accountDelete: resolve(__dirname, 'account-delete.html'),
            contact: resolve(__dirname, 'contact.html'),
            faq: resolve(__dirname, 'faq.html'),
            payment: resolve(__dirname, 'payment.html'),
            privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
            tremsConditions: resolve(__dirname, 'trems-conditions.html'),
          },
        },
      },
})