import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['cs', 'en', 'de', 'ru', 'ua'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  
  // Always use the default locale for the root path
  localePrefix: 'always',

  // Detect browser language and redirect accordingly
  localeDetection: true
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 