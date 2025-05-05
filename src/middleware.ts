import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const themeCookie = request.cookies.get('theme');
  const theme = themeCookie?.value === 'dark' ? 'dark' : 'light';

  response.headers.set('x-theme', theme);
  return response;
}
