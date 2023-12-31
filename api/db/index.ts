import { Client, Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import dotenv from "dotenv";

import * as schema from "./schema";

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const client = new Client({
  connectionString: DATABASE_URL,
});
client.connect();
export const db = drizzle(client, { schema: schema });
