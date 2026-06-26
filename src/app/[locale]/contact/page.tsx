import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Container from '@/components/Container';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'contact.meta'});
  return {title: t('title')};
}

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const fieldClass =
    'w-full rounded-2xl border border-taupe-200/80 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200';

  return (
    <Container>
      <section className="py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          {t('eyebrow')}
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          {t('subtitle')}
        </p>

        {/* UI only: no action, no JS, nothing leaves the browser. */}
        <form noValidate className="mt-10 max-w-xl space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">
              {t('form.name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t('form.namePlaceholder')}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80">
              {t('form.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t('form.emailPlaceholder')}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80">
              {t('form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t('form.messagePlaceholder')}
              className={fieldClass}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-sage-600/40 px-5 py-2.5 text-sm font-medium text-paper"
            >
              {t('form.send')}
            </button>
            <span className="font-mono text-xs uppercase tracking-wide text-accent-600">
              {t('form.wip')}
            </span>
          </div>
        </form>
      </section>
    </Container>
  );
}
