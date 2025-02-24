import { mutation } from "./_generated/server";
import { auth } from "./_generated/auth";

export const signIn = mutation(async ({ auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error("Authentication failed.");
  }
  return identity;
});
