import {cn} from '@/lib/cn';

export default function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 sm:px-8', className)}>
      {children}
    </div>
  );
}
