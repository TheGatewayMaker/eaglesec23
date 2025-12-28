import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/pages",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        services: path.resolve(__dirname, "pages/services.html"),
        about: path.resolve(__dirname, "pages/about.html"),
        "why-choose-us": path.resolve(__dirname, "pages/why-choose-us.html"),
        contact: path.resolve(__dirname, "pages/contact.html"),
      },
    },
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add middleware to serve appropriate HTML for each route before Express app
      server.middlewares.use((req, res, next) => {
        const routes: Record<string, string> = {
          "/": "index.html",
          "/services": "pages/services.html",
          "/about": "pages/about.html",
          "/why-choose-us": "pages/why-choose-us.html",
          "/contact": "pages/contact.html",
        };

        const pathName = req.url.split("?")[0];
        const htmlFile = routes[pathName];

        if (htmlFile && !pathName.startsWith("/api")) {
          const htmlPath = path.resolve(__dirname, htmlFile);
          if (fs.existsSync(htmlPath)) {
            const html = fs.readFileSync(htmlPath, "utf-8");
            // Transform and serve the HTML through Vite
            return server.transformIndexHtml(pathName, html).then((transformedHtml) => {
              res.setHeader("Content-Type", "text/html");
              res.end(transformedHtml);
            });
          }
        }

        next();
      });

      // Add Express app as middleware for API routes
      server.middlewares.use(app);
    },
  };
}
