import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
/// <reference types="vitest" />
/// <reference types="vite/client" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.jsx"],
  },
});
