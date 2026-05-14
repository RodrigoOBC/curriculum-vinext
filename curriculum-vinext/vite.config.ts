import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    vinext(),
    ...(command === "build"
      ? [
          cloudflare({
            viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
          }),
        ]
      : []),
  ],
  ssr: {
    external: ["mongodb"],
  },
}));
