import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const db = drizzle('file:db/local.db', {schema});

export {schema};

export * from 'drizzle-kit';