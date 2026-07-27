import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "html-env-fallback",
        transformIndexHtml(html) {
          return html
            .replace(/%VITE_GA_ID%/g, env.VITE_GA_ID || "")
            .replace(/%VITE_CLARITY_ID%/g, env.VITE_CLARITY_ID || "");
        },
      },
    ],
  };
});
