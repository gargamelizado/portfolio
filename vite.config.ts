/**
 * Build Vite + @vitejs/plugin-react.
 * react({ babel.plugins }) ativa o React Compiler em tempo de build.
 */
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
