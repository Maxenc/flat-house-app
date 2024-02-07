import {date, int, mysqlTable, serial, text, time, timestamp} from "drizzle-orm/mysql-core";
import {channels_schema} from "@/lib/db/schema/channels_schema";
import {members_schema} from "@/lib/db/schema/members_schema";
import {sql} from "drizzle-orm";


export const messages_schema = mysqlTable('messages', {
    id: serial('id').primaryKey(),
    channel_id: int('channel_id').notNull(),
    member_id: int('member_id').notNull(),
    content: text('content').notNull(),
    created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
})