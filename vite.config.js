import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
            },
            manifest: {
                name: "Portfólio do Guilherme",
                short_name: "Portfólio",
                description:
                    "Portfólio interativo de Guilherme Ramon, desenvolvedor front-end. Projetos modernos, design responsivo e experiência offline como PWA.",
                theme_color: "#000000",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                orientation: "portrait",
                icons: [
                    {
                        src: "/favicon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "/favicon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                ],
                screenshots: [
                    {
                        src: "/screenshots/home-wide.png",
                        sizes: "1280x720",
                        type: "image/png",
                        form_factor: "wide",
                    },
                    {
                        src: "/screenshots/home-mobile.png",
                        sizes: "640x360",
                        type: "image/png",
                    },
                ],
            },
            devOptions: {
                enabled: true,
            },
        }),
    ],
});
