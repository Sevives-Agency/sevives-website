import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {Inter, Fraunces} from 'next/font/google';
import {routing, type Locale} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({subsets: ['latin'], variable: '--font-sans', display: 'swap'});
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});

  return {
    title: {default: t('title'), template: `%s · ${t('title')}`},
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tBanner = await getTranslations('banner');

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-dvh flex-col bg-paper text-ink antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="border-b border-taupe-200/60 bg-sage-50/70">
            <p className="mx-auto max-w-content px-6 py-2 text-center font-mono text-[11px] leading-relaxed tracking-wide text-sage-800 sm:px-8">
              🚧 {tBanner('wip')}
            </p>
          </div>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
