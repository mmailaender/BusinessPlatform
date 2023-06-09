import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up'],
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(signInUrl);
    }

    // console.log('=====auth.orgId=====', auth.orgId);
    // if (!auth.orgId) {
    //   const createOrganizationUrl = new URL('/organization/create', req.url);
    //   return NextResponse.redirect(createOrganizationUrl);
    // }
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
