import "dotenv/config";
import { hono } from "./routes";
import { serve } from "@hono/node-server";

serve(hono);

console.log("Server is running on port 3000");