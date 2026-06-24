'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {cn} from '@/lib/cn';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, {locale: l})}
          aria-current={l === locale ? 'true' : undefined}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-medium uppercase tracking-wide transition-colors',
            l === locale
              ? 'bg-sage-100 text-sage-800'
              : 'text-ink/50 hover:text-ink'
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
