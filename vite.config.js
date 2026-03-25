/**
 * Build Vite + @vitejs/plugin-react.
 * react({ babel.plugins }) ativa o React Compiler em tempo de build.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
