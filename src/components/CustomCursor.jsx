import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check element under cursor for custom cursor triggers
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovering(true);
      } else {
        setCursorText('');
        setIsHovering(false);
      }

      const clickable = e.target.closest('button, a, input, select, textarea, [role="button"]');
      setIsPointer(!!clickable);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Smooth trailing effect for outer ring
  useEffect(() => {
    if (!isVisible) return;
    let animationFrame;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrame = requestAnimationFrame(followCursor);
    };
    animationFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrame);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-electric-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38bdf8] transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />

      {/* Trailing Ring / Expandable Pill */}
      <div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-200 border ${
          isHovering
            ? 'w-28 h-28 bg-electric-500/20 border-electric-400/80 backdrop-blur-sm shadow-[0_0_25px_rgba(56,189,248,0.4)]'
            : isPointer
            ? 'w-12 h-12 bg-white/10 border-white/50 scale-110'
            : 'w-8 h-8 bg-transparent border-electric-400/30'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {isHovering && cursorText && (
          <span className="text-[10px] tracking-wider uppercase font-bold text-electric-400 px-2 text-center leading-tight animate-fade-in font-display">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
