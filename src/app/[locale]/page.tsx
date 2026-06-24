import {getTranslations, setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  const cards = ['0', '1', '2'] as const;

  return (
    <Container>
      <section className="py-24 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          {t('eyebrow')}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] sm:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          {t('subtitle')}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button>{t('ctaPrimary')}</Button>
          <Button variant="ghost">{t('ctaSecondary')}</Button>
        </div>
      </section>

      <section className="grid gap-5 pb-24 sm:grid-cols-3">
        {cards.map((i) => (
          <article
            key={i}
            className="rounded-3xl border border-taupe-200/70 bg-white/50 p-7 transition-colors hover:border-sage-300"
          >
            <div className="h-11 w-11 rounded-2xl bg-sage-100 ring-1 ring-inset ring-sage-200" />
            <h2 className="mt-5 font-display text-xl">{t(`cards.${i}.title`)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {t(`cards.${i}.body`)}
            </p>
          </article>
        ))}
      </section>
    </Container>
  );
}
