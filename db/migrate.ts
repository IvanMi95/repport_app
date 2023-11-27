import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import dotenv from "dotenv";

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("Migration started....");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("Migration ended");
  process.exit(0);
}
main().catch((err) => {
  console.log(err);
  process.exit(0);
});
