import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const base = process.env.BASE_PATH || "/";
  return {
    base,
    plugins: [react()],
  };
});
