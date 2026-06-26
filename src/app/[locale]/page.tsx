import {getTranslations, setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';
import LinkButton from '@/components/LinkButton';
import Carousel3DSection from '@/components/carousel/Carousel3DSection';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  const carouselItems = ['0', '1', '2', '3', '4', '5'].map((k) =>
    t(`carousel.items.${k}`)
  );
  const blueprints = ['mastery', 'community', 'visual'] as const;
  const steps = ['0', '1', '2'] as const;

  return (
    <Container>
      {/* Hero */}
      <section className="py-20 sm:py-28">
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
          <LinkButton href="/blueprints">{t('ctaPrimary')}</LinkButton>
          <LinkButton href="/contact" variant="ghost">
            {t('ctaSecondary')}
          </LinkButton>
        </div>
      </section>

      {/* 3D carousel — the centerpiece pattern */}
      <section className="pb-20 sm:pb-28">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
              {t('carousel.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl">
              {t('carousel.title')}
            </h2>
          </div>
          <p className="text-sm text-ink/50">{t('carousel.hint')}</p>
        </div>
        <Carousel3DSection items={carouselItems} />
      </section>

      {/* Blueprints teaser */}
      <section className="border-t border-taupe-200/60 py-20 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          {t('blueprints.eyebrow')}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl sm:text-3xl">
          {t('blueprints.title')}
        </h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {blueprints.map((key) => (
            <article
              key={key}
              className="rounded-3xl border border-taupe-200/70 bg-white/50 p-7 transition-colors hover:border-sage-300"
            >
              <div className="h-11 w-11 rounded-2xl bg-sage-100 ring-1 ring-inset ring-sage-200" />
              <h3 className="mt-5 font-display text-xl">
                {t(`blueprints.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {t(`blueprints.items.${key}.body`)}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <LinkButton href="/blueprints" variant="ghost">
            {t('blueprints.cta')}
          </LinkButton>
        </div>
      </section>

      {/* Process / proof */}
      <section className="border-t border-taupe-200/60 py-20 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          {t('process.eyebrow')}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl sm:text-3xl">
          {t('process.title')}
        </h2>
        <ol className="mt-9 grid gap-8 sm:grid-cols-3">
          {steps.map((i) => (
            <li key={i}>
              <span className="font-mono text-sm text-sage-600">
                {String(Number(i) + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg">
                {t(`process.steps.${i}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {t(`process.steps.${i}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
