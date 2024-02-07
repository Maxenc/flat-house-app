import {users_schema} from "@/lib/db/schema/users_schema";
import {int, mysqlEnum, mysqlTable, serial} from "drizzle-orm/mysql-core";
import {flat_shares_schema} from "@/lib/db/schema/flat_shares_schema";
import {relations} from "drizzle-orm";
import {members_flat_shares_schema} from "@/lib/db/schema/members_flat_shares_schema";


export const members_schema = mysqlTable('members', {
    id: serial('id').primaryKey(),
    user_id: int('user_id').notNull(),
    role: mysqlEnum('role', ['owner', 'roommate', 'guest']).default('guest').notNull(),
})

export const members_f_sharesRelations = relations(members_schema, ({ many }) => ({
    members_flat_shares: many(members_flat_shares_schema),
}));