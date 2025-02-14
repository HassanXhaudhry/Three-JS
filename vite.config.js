import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  plugins: [react()],
  build: {
    sourcemap: false,
  },
})
