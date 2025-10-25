// Guest / demo mode: authentication is OPTIONAL.
//
// This project is used as a public testimonial / showcase, so visitors can use
// the app without signing in. `protectServer()` used to redirect unauthenticated
// users to the sign-in page — it is now a no-op that lets everyone through.
//
// To re-enable auth-gating later, restore the original implementation:
//
//   import { redirect } from "next/navigation";
//   import { auth } from "@/auth";
//
//   export const protectServer = async () => {
//     const session = await auth();
//     if (!session) redirect("/api/auth/signin");
//   };
export const protectServer = async () => {
  return;
};
