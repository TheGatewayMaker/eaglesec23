import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Serve static assets
  const isDev = process.env.NODE_ENV !== "production";

  if (isDev) {
    // In development, Vite dev server handles static files
    // Just define routes for each page
    const pages = [
      { route: "/", file: "index.html" },
      { route: "/services", file: "pages/services.html" },
      { route: "/about", file: "pages/about.html" },
      { route: "/why-choose-us", file: "pages/why-choose-us.html" },
      { route: "/contact", file: "pages/contact.html" },
    ];

    // Define routes - they will be handled by Vite dev server
    pages.forEach(({ route }) => {
      app.get(route, (_req: Request, res: Response) => {
        res.redirect(route);
      });
    });
  } else {
    // In production, serve the built files
    const distPath = path.resolve(__dirname, "../pages");

    // Serve static assets
    app.use(express.static(distPath, { maxAge: "1y", etag: false }));

    // Define routes for each page
    const pages = [
      { route: "/", file: "index.html" },
      { route: "/services", file: "services.html" },
      { route: "/about", file: "about.html" },
      { route: "/why-choose-us", file: "why-choose-us.html" },
      { route: "/contact", file: "contact.html" },
    ];

    pages.forEach(({ route, file }) => {
      app.get(route, (_req: Request, res: Response) => {
        const filePath = path.join(distPath, file);
        if (fs.existsSync(filePath)) {
          res.sendFile(filePath);
        } else {
          res.status(404).sendFile(path.join(distPath, "index.html"));
        }
      });
    });

    // Catch-all for 404
    app.get("*", (_req: Request, res: Response) => {
      res.status(404).sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}
