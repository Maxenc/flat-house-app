import {mysqlTable, serial, text} from "drizzle-orm/mysql-core";

export const test = mysqlTable('test', {
    id: serial('id').primaryKey(),
    name: text('name'),
})