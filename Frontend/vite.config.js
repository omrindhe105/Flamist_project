import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        'flamist-gradient': 'linear-gradient(to right, #FF5722, #2196F3)', // adjust colors as needed
      },
    },
  },
  plugins: [react(),tailwindcss()],

})
