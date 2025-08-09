// lib/auth.ts for google
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
export const {
  handlers: { GET, POST },
  // cf. next-auth/react/signIn/signOut은 해당 페이지로 이동하는 함수!
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [Google],
});
