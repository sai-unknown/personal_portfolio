"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer: coarse)").matches
      : false
  );

  const animationFrameRef = useRef<number | undefined>(undefined);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 }); // ✅ replaces mousePosition state

  // Check for reduced motion preference and input type changes
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: coarse)");

    const handleReducedMotion = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    reducedMotionQuery.addEventListener("change", handleReducedMotion);
    pointerQuery.addEventListener("change", handlePointerChange);

    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotion);
      pointerQuery.removeEventListener("change", handlePointerChange);
    };
  }, []);

  // ✅ Single animation loop — never restarts on mouse move
  useEffect(() => {
    if (isReducedMotion || isMobile) return;

    const animate = () => {
      const easing = 0.15;
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * easing;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * easing;

      setDisplayPosition({
        x: positionRef.current.x,
        y: positionRef.current.y,
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isReducedMotion, isMobile]); // ✅ no mousePosition dependency

  // Track mouse movement — writes to ref, not state
  useEffect(() => {
    if (isReducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }; // ✅ ref, not setState
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReducedMotion, isMobile]);

  // Detect hover over interactive elements
  useEffect(() => {
    if (isReducedMotion || isMobile) return;

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1'])"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isReducedMotion, isMobile]);

  if (isReducedMotion || isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${displayPosition.x}px`,
        top: `${displayPosition.y}px`,
        transform: `translate(-50%, -50%) scale(${isHoveringInteractive ? 0.6 : 1})`,
        transition: "transform 0.3s ease-out",
        willChange: "transform",
      }}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white"
        style={{ filter: "blur(1px)" }}
      />
    </div>
  );
}