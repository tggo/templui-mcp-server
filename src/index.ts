#!/usr/bin/env node
import { start } from "./server/index.js";
import { logError } from "./utils/logger.js";

start().catch((error: Error) => {
  logError("Unhandled startup error", error);
  process.exit(1);
});