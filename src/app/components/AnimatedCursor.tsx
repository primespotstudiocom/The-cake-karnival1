import { useEffect, useRef, useState } from 'react';

type CursorState = {
  x: number;
  y: number;
};

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

export function AnimatedCursor() {
  const rafRef = useRef<number | null>(null);
  const pointerTarget = useRef<CursorState>({ x: 0, y: 0 });
  const ringCurrent = useRef<CursorState>({ x: 0, y: 0 });
  const moveTimeoutRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [dotPosition, setDotPosition] = useState<CursorState>({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState<CursorState>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const updateInteractiveState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setIsInteractive(false);
        return;
      }

      setIsInteractive(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    const animate = () => {
      ringCurrent.current.x += (pointerTarget.current.x - ringCurrent.current.x) * 0.18;
      ringCurrent.current.y += (pointerTarget.current.y - ringCurrent.current.y) * 0.18;

      setRingPosition({
        x: ringCurrent.current.x,
        y: ringCurrent.current.y,
      });

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTarget.current = { x: event.clientX, y: event.clientY };
      ringCurrent.current = ringCurrent.current.x === 0 && ringCurrent.current.y === 0 ? pointerTarget.current : ringCurrent.current;
      setDotPosition(pointerTarget.current);
      setIsVisible(true);
      setIsMoving(true);
      updateInteractiveState(event.target);

      if (moveTimeoutRef.current !== null) window.clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = window.setTimeout(() => setIsMoving(false), 120);
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);
    const handlePointerDown = () => setIsInteractive(true);
    const handlePointerUp = (event: PointerEvent) => updateInteractiveState(event.target);

    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerenter', handlePointerEnter);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      if (moveTimeoutRef.current !== null) window.clearTimeout(moveTimeoutRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={[
          'custom-cursor-dot',
          isVisible ? 'opacity-100' : 'opacity-0',
          isMoving ? 'is-moving' : '',
          isInteractive ? 'scale-75' : 'scale-100',
        ].join(' ')}
        style={{
          transform: `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0) translate(-50%, -50%) scale(${
            isInteractive ? 0.75 : isMoving ? 1.15 : 1
          })`,
        }}
      />
      <div
        aria-hidden="true"
        className={[
          'custom-cursor-ring',
          isVisible ? 'opacity-100' : 'opacity-0',
          isMoving ? 'is-moving' : '',
          isInteractive ? 'scale-110' : 'scale-100',
        ].join(' ')}
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%) scale(${
            isInteractive ? 1.1 : isMoving ? 1.22 : 1
          })`,
        }}
      />
    </>
  );
}
