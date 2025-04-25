// vite.config.js
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import config from "./config.ts";

const HOST = config.server.host;
const PORT = config.server.port;

export default defineConfig({
  plugins: [glsl()],
  server: {
    host: HOST,
    port: PORT,
  },
});
