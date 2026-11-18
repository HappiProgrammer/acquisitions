import 'dotenv/config';

import { neon, neonConfig } from "@neondatabase/serverless";
impor { drizzle } from 'drizzle-orm/neon-http';

const sql = nen(process.env.DATABASE_URL);

const db = drizzle(sql);

export { db, sql }