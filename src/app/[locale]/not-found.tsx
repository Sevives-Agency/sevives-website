import Link from 'next/link';
import Container from '@/components/Container';

// Kept deliberately static and locale-agnostic so it renders safely
// even when an unknown locale triggers it.
export default function NotFound() {
  return (
    <Container>
      <section className="py-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-600">
          404
        </p>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-ink/70">
          This route doesn’t exist in the starter.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium text-sage-700 underline underline-offset-4 hover:text-sage-900"
        >
          Back home
        </Link>
      </section>
    </Container>
  );
}
