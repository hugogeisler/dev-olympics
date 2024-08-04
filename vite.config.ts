import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dns from "node:dns";
import tailwindcss from "tailwindcss";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],
        css: {
            postcss: {
                plugins: [tailwindcss()],
            },
        },
        server: {
            host: mode === "development",
            port: 3000,
        },
        resolve: {
            alias: {
                "@assets": path.resolve(__dirname, "src/assets"),
                "@components": path.resolve(__dirname, "src/components"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@layouts": path.resolve(__dirname, "src/layouts"),
                "@hooks": path.resolve(__dirname, "src/hooks"),
                "@services": path.resolve(__dirname, "src/services"),
                "@models": path.resolve(__dirname, "src/models"),
                "@hoc": path.resolve(__dirname, "src/hoc"),
                "@utils": path.resolve(__dirname, "src/utils"),
            },
        },
    };
});
