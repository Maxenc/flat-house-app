import {mysqlTable, serial, text, time, timestamp, varchar} from "drizzle-orm/mysql-core";
import { createId } from '@paralleldrive/cuid2';
import {relations, sql} from "drizzle-orm";
import {channels_schema} from "@/lib/db/schema/channels_schema";
import {members_flat_shares_schema} from "@/lib/db/schema/members_flat_shares_schema";


export const flat_shares_schema = mysqlTable('flat_shares', {
    id: serial('id').primaryKey(),
    uuid: varchar('uuid', { length: 128 }).$defaultFn(() => createId()),
    created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const flat_sharesRelations = relations(flat_shares_schema, ({ many }) => ({
    posts: many(channels_schema),
}));

export const m_flat_sharesRelations = relations(flat_shares_schema, ({ many }) => ({
    members_flat_shares: many(members_flat_shares_schema),
}));
