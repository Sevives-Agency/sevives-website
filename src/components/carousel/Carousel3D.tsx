'use client';

import {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {RoundedBox, Html} from '@react-three/drei';
import * as THREE from 'three';

/**
 * Carousel3D — a GENERIC, reusable 3D carousel pattern (teaching build).
 *
 * What this file teaches (the ~60% that's public):
 *   • circular layout — map each index to an angle, place with sin/cos
 *   • one rotating group — the whole ring spins as a single object
 *   • drag + inertia — pointer drag in the DOM, momentum in the frame loop
 *   • facing cull — labels fade as their card rotates away from the camera
 *
 * What is deliberately NOT here (the hard ~40%, the part that makes it *ours* —
 * covered in the course): the exact feel. Easing curves, snap-to-index,
 * a custom material/shader, the precise inertia + fade timing. Every spot where
 * that signature polish lives is flagged with 🎓 and left at a neutral default.
 */

// --- Tunables. Neutral, functional defaults on purpose. ----------------------
const RADIUS = 2.6; // ring radius (world units)
const PANEL = {w: 1.6, h: 2.2, d: 0.14}; // card-like portrait panels
const DRAG_SENSITIVITY = 0.005; // screen px -> radians
const FRICTION = 0.94; // inertia decay after release  🎓 exact decay/snap = signature
const IDLE_SPEED = 0.0016; // gentle auto-spin when idle    🎓 signature feel

// Muted, on-brand palette (sage / taupe). Accent (warm) used once — it stays rare.
const COLORS = ['#c8d6c4', '#d9cfc2', '#a4ba9e', '#c2b3a1', '#f4c4b1', '#7e9b78'];

type DragState = {
  dragging: boolean;
  lastX: number;
  rotation: number; // current ring rotation (radians)
  velocity: number; // carried into inertia on release
};

function Ring({
  items,
  drag
}: {
  items: string[];
  drag: React.MutableRefObject<DragState>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const labelRefs = useRef<Array<HTMLSpanElement | null>>([]);

  // The entire lesson of a 3D carousel lives in this frame loop.
  useFrame((_, delta) => {
    const s = drag.current;

    // 1) Advance rotation. Dragging writes rotation directly (see DOM handlers);
    //    when released we coast on inertia, then drift idle so it never looks dead.
    if (!s.dragging) {
      s.rotation += s.velocity;
      s.velocity *= FRICTION; // 🎓 the precise decay/snap-to-card is the signature
      if (Math.abs(s.velocity) < 0.0002) s.rotation += IDLE_SPEED * (delta * 60);
    }
    if (groupRef.current) groupRef.current.rotation.y = s.rotation;

    // 2) Facing cull: fade each label out as its card turns away from the camera.
    //    cos(cardAngle + ringRotation) is +1 dead-front, 0 at the sides, -1 at back.
    items.forEach((_label, i) => {
      const a = (i / items.length) * Math.PI * 2;
      const facing = Math.cos(a + s.rotation);
      const el = labelRefs.current[i];
      if (el) el.style.opacity = String(Math.max(0, facing)); // 🎓 exact fade curve = signature
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((label, i) => {
        // Core trick: even spacing around a circle via index -> angle -> sin/cos.
        const a = (i / items.length) * Math.PI * 2;
        const x = Math.sin(a) * RADIUS;
        const z = Math.cos(a) * RADIUS;
        return (
          <group key={i} position={[x, 0, z]} rotation={[0, a, 0]}>
            <RoundedBox args={[PANEL.w, PANEL.h, PANEL.d]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color={COLORS[i % COLORS.length]}
                roughness={0.65}
                metalness={0}
              />
            </RoundedBox>
            {/* Label as DOM text — crisp, no font assets. Billboards to the camera;
                opacity is driven by the facing cull above. */}
            <Html center position={[0, 0, PANEL.d / 2 + 0.01]} zIndexRange={[10, 0]}>
              <span
                ref={(el) => {
                  labelRefs.current[i] = el;
                }}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  color: '#2b382a', // sage-900 — readable on the muted cards
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                {label}
              </span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

/**
 * Public component. Drag is handled at the DOM level (simple + readable) and fed
 * to the scene through a ref — one pointer path covers mouse, touch and pen.
 */
export default function Carousel3D({items}: {items: string[]}) {
  const drag = useRef<DragState>({
    dragging: false,
    lastX: 0,
    rotation: 0,
    velocity: 0
  });

  const onDown = (e: React.PointerEvent) => {
    drag.current.dragging = true;
    drag.current.lastX = e.clientX;
    drag.current.velocity = 0;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = drag.current;
    if (!s.dragging) return;
    const step = (e.clientX - s.lastX) * DRAG_SENSITIVITY;
    s.rotation += step;
    s.velocity = step; // last delta becomes the release velocity
    s.lastX = e.clientX;
  };
  const onUp = () => {
    drag.current.dragging = false;
  };

  return (
    <div
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      style={{height: '100%', width: '100%', cursor: 'grab', touchAction: 'pan-y'}}
    >
      <Canvas camera={{position: [0, 0, 6], fov: 45}} dpr={[1, 2]}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 5, 4]} intensity={1.1} />
        <Ring items={items} drag={drag} />
      </Canvas>
    </div>
  );
}
