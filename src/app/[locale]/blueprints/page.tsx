import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';
import LinkButton from '@/components/LinkButton';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'blueprints.meta'});
  return {title: t('title')};
}

export default async function BlueprintsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blueprints');

  const items = ['mastery', 'community', 'visual'] as const;

  return (
    <Container>
      <section className="py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          {t('eyebrow')}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          {t('subtitle')}
        </p>
      </section>

      <section className="grid gap-6 pb-16 lg:grid-cols-3">
        {items.map((key) => {
          const points = t.raw(`items.${key}.points`) as string[];
          return (
            <article
              key={key}
              className="flex flex-col rounded-3xl border border-taupe-200/70 bg-white/50 p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sage-600">
                {t(`items.${key}.tagline`)}
              </p>
              <h2 className="mt-3 font-display text-2xl">{t(`items.${key}.name`)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {t(`items.${key}.body`)}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-taupe-200/60 pt-6">
                {points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink/70">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section className="border-t border-taupe-200/60 py-16">
        <p className="max-w-2xl text-sm leading-relaxed text-ink/50">{t('note')}</p>
        <div className="mt-7">
          <LinkButton href="/contact">{t('cta')}</LinkButton>
        </div>
      </section>
    </Container>
  );
}
