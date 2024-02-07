import {protectedProcedure, publicProcedure, router} from "@/lib/server/trpc";
import {z} from "zod";
import {clerkClient} from "@clerk/nextjs";
import {test} from "@/lib/db/schema/test";
import {members_schema} from "@/lib/db/schema/members_schema";
export const usersRouter = router({

    updateUsername : publicProcedure.input(z.object({ name:z.string().min(2) })).mutation(async ({input, ctx}) => {
        if (!ctx.session?.user.id) {
            throw new Error("User not found");
        }

        await clerkClient.users.updateUser(ctx.session.user.id, {
            username: input.name
        });
    }),

    createUser : protectedProcedure.mutation(async ({input, ctx}) => {
        await ctx.db.insert(test).values({name: 'test'}).execute();
    }),

    getMembers : protectedProcedure.query(async ({ctx}) => {
        // return await ctx.db.select().from(members_schema).execute();
        const test = await ctx.db.query.members_schema.findFirst({
            with: {
                members_flat_shares: true,
            }
        }).execute();
        console.log('-------------')
        console.log(test);
        return test;

    })
});
