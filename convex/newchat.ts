// import { query } from "./_generated/server";

// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// export const createChat = mutation({
//   args: {
//     title: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const chatId = await ctx.db.insert("chats", {
//       title: args.title,
//     });
//   },
// });

import { mutation} from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export const createChat = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity=await ctx.auth.getUserIdentity();
    if(!identity){
      throw new Error("use is Not login")
    }
    // Insert a new chat with the userId
    const chat = await ctx.db.insert("newchat", {
      title: args.title,
      userId:identity.subject,
      createdAt: Date.now(),
    });
    return chat;
  },
});

// export const getChats = query(async ({ db }) => {
//   return await db.query("newchat").collect();
// });
