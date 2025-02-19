import { mutation } from "./_generated/server";
import { v } from "convex/values";


export const createChat = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const chatId = await ctx.db.insert("chats", {
      title: args.title,
    });
  },
});

// import { mutation } from "./_generated/server";
// import { v } from "convex/values";

// export const createChat = mutation({
//   args: {
//     title: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // Get user identity
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) {
//       throw new Error("Not authenticated");
//     }

//     // Insert a new chat with the userId
//     const chatId = await ctx.db.insert("chats", {
//       title: args.title,
//       userId: identity.subject, 
//       createdAt: Date.now(), 

//     });

//     return chatId;
  
//   },
// });
