import {useTranslations} from 'next-intl';
import Container from './Container';
import LocaleSwitcher from './LocaleSwitcher';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-taupe-200/60">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-base">Sevives</p>
          <p className="mt-1 max-w-sm text-sm text-ink/50">{t('tagline')}</p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-ink/40">
            {t('wip')}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <LocaleSwitcher />
          <p className="text-xs text-ink/40">{t('channel')}</p>
          <p className="text-xs text-ink/40">© {year} Sevives</p>
        </div>
      </Container>
    </footer>
  );
}
