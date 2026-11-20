import { createApp } from "./app.js";
import { loadEnv } from "./config/env.js";

const env = loadEnv();
const app = createApp({ corsOrigin: env.CORS_ORIGIN });

app.listen(env.PORT, () => {
  console.log(`@seahorse/backend listening on http://localhost:${env.PORT} (${env.NODE_ENV})`);
});
