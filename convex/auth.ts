import { action } from "./_generated/server";
import { auth } from "./_generated/auth";
import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers:[GitHub],
});

export const signIn = action(async ({ auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error("Authentication failed.");
  }
  return identity;
});s