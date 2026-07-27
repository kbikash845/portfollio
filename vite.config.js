import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      {
        name: "html-env-fallback",
        enforce: "pre",
        transformIndexHtml(html) {
          return html
            .replace(/%VITE_GA_ID%/g, env.VITE_GA_ID || "")
            .replace(/%VITE_CLARITY_ID%/g, env.VITE_CLARITY_ID || "");
        },
      },
      react(),
      tailwindcss(),
    ],
  };
});
