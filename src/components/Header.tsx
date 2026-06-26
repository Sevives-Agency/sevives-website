import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Container from './Container';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations('nav');

  const links = [
    {key: 'home', href: '/'},
    {key: 'blueprints', href: '/blueprints'},
    {key: 'contact', href: '/contact'}
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-taupe-200/60 bg-paper/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-sage-600">
            <span className="block h-2.5 w-2.5 rounded-sm bg-accent-400" />
          </span>
          <span className="font-display text-lg tracking-tight">Sevives</span>
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher />
      </Container>
    </header>
  );
}
