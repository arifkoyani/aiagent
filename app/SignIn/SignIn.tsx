import { useAuthActions } from "@convex-dev/auth/react";

export function SignIn() {
  const { signIn } = useAuthActions();
  async function handleLogin() {
    try {
      const user = await signIn("github");
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Sign In
    </button>
  );
}
