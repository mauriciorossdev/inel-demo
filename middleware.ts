import createMiddleware from 'next-intl/middleware';
import { locales } from './src/config';

export default createMiddleware({
  locales,
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};