import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,

  newchat: defineTable({
    title: v.string(),
    userId: v.string(),
    createdAt: v.number(),
  })
});

export default schema;
