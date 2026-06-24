import {cn} from '@/lib/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'ghost';
};

export default function Button({
  variant = 'solid',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
        variant === 'solid' && 'bg-sage-600 text-paper hover:bg-sage-700',
        variant === 'ghost' &&
          'border border-taupe-300 text-ink hover:border-sage-400 hover:text-sage-700',
        className
      )}
      {...props}
    />
  );
}
