export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/bookmarks", "/profile", "/settings"],
};
