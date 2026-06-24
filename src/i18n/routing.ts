import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Order reflects rollout priority: Spanish first, then French, then English.
  locales: ['es', 'fr', 'en'],
  defaultLocale: 'es',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
