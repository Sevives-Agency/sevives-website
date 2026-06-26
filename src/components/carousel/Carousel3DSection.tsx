'use client';

import dynamic from 'next/dynamic';

// WebGL can't render on the server, so the scene is loaded client-only.
// A static, on-brand placeholder holds the layout while three.js loads.
const Carousel3D = dynamic(() => import('./Carousel3D'), {
  ssr: false,
  loading: () => <Placeholder />
});

function Placeholder() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="h-40 w-28 animate-pulse rounded-2xl bg-sage-100 ring-1 ring-inset ring-sage-200" />
    </div>
  );
}

/**
 * Drop-in section: give it the panel labels, it renders the 3D carousel.
 * Reusable — the labels are just data, nothing here is specific to one page.
 */
export default function Carousel3DSection({items}: {items: string[]}) {
  return (
    <div className="h-[clamp(20rem,46vw,30rem)] w-full overflow-hidden rounded-[2rem] border border-taupe-200/70 bg-gradient-to-b from-white/60 to-sage-50/40">
      <Carousel3D items={items} />
    </div>
  );
}
