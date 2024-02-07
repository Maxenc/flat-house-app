
import {int, mysqlTable, primaryKey, serial} from "drizzle-orm/mysql-core";
import {flat_shares_schema} from "@/lib/db/schema/flat_shares_schema";
import {members_schema} from "@/lib/db/schema/members_schema";
import {relations} from "drizzle-orm";

export const members_flat_shares_schema = mysqlTable('members_flat_shares', {
    member_id: int('member_id').notNull(),
    flat_share_id: int('flat_share_id').notNull(),
}, (t) => ({
    pk: primaryKey({ columns: [t.member_id, t.flat_share_id] })
    }),
);

export const members_flat_shares_Relations = relations(members_flat_shares_schema, ({ one }) => ({
    flat_share: one(flat_shares_schema, {
        fields: [members_flat_shares_schema.flat_share_id],
        references: [flat_shares_schema.id],
    }),
    member: one(members_schema, {
        fields: [members_flat_shares_schema.member_id],
        references: [members_schema.id],
    }),
}));
