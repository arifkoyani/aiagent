import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
  users: defineTable({ /* user fields */ }),
  newchat: defineTable({ /* chat fields */ }) 
  // Your other tables...
});

export default schema;
