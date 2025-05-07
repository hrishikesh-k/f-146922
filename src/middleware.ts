import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const initialTheme = request.cookies.get('theme')?.value;
  let theme = 'light';
  if (initialTheme === 'dark') {
    theme = 'dark';
  }

  const response = NextResponse.next()
  response.headers.set('x-theme', theme);
  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|netlify|_next|_vercel|.*\\..*).*)'],
};
