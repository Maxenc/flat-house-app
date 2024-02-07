import {int, mysqlEnum, mysqlTable, serial, text} from "drizzle-orm/mysql-core";
import {flat_shares_schema} from "@/lib/db/schema/flat_shares_schema";
import {relations} from "drizzle-orm";


export const channels_schema = mysqlTable('channels', {
    id: serial('id').primaryKey(),
    flat_share_id: int('flat_share_id').notNull(),
    channel_name: text('channel_name').notNull(),
    type: mysqlEnum('type', ['text', 'voice', 'calendar', 'other']).default('text').notNull(),
})

export const channelsRelations = relations(channels_schema, ({ one }) => ({
    flat_share: one(flat_shares_schema, {
        fields: [channels_schema.flat_share_id],
        references: [flat_shares_schema.id],
    }),
}));