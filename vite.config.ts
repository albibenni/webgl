import { defineConfig } from "vite";
import config from "./config";
import restart from "vite-plugin-restart";

const HOST = config.server.host;
const PORT = config.server.port;

export default defineConfig({
  //plugins: [glsl()],

  root: "./", // Sources files (typically where index.html is)
  publicDir: "../static/", // Path from "root" to static assets (files that are served as they are)
  server: {
    host: HOST,
    port: PORT,
    //open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] }), // Restart server on static file change
  ],
});
