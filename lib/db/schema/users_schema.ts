import {date, mysqlTable, serial, text, time, timestamp, varchar} from "drizzle-orm/mysql-core";
import {sql} from "drizzle-orm";


export const users_schema = mysqlTable('users', {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    password: text('password').notNull(),
    email: varchar('email', {length: 256}).notNull().unique(),
    created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updated_at: timestamp('updated_at'),
});
