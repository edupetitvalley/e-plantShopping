import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/shoppingreact", //localhost
  base: "/conference_event_planner", //github pages
  plugins: [react()],
})
