import {Link} from '@/i18n/navigation';
import {cn} from '@/lib/cn';

type LinkButtonProps = {
  href: string;
  variant?: 'solid' | 'ghost';
  className?: string;
  children: React.ReactNode;
};

// Locale-aware link styled as a button — mirrors <Button> for CTAs that navigate.
export default function LinkButton({
  href,
  variant = 'solid',
  className,
  children
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
        variant === 'solid' && 'bg-sage-600 text-paper hover:bg-sage-700',
        variant === 'ghost' &&
          'border border-taupe-300 text-ink hover:border-sage-400 hover:text-sage-700',
        className
      )}
    >
      {children}
    </Link>
  );
}
