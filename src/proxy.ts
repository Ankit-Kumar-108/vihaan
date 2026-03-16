import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ token }) => {
            return token?.email === process.env.ADMIN_EMAIL || token?.email === process.env.ADMIN_EMAIL2;
        },
    },
});

export const config = {
    matcher: ["/admin", "/admin/:path*"]
};
