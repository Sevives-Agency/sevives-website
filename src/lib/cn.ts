/** Tiny className joiner — keeps conditional classes readable without a dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
