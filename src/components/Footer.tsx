import {useTranslations} from 'next-intl';
import Container from './Container';
import LocaleSwitcher from './LocaleSwitcher';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-taupe-200/60">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base">Starter</p>
          <p className="mt-1 max-w-sm text-sm text-ink/50">{t('note')}</p>
        </div>
        <div className="flex items-center gap-6">
          <LocaleSwitcher />
          <p className="text-xs text-ink/40">© {year}</p>
        </div>
      </Container>
    </footer>
  );
}
