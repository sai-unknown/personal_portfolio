"use client";

import { useEffect, useState, useRef } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayPosition, setDisplayPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const positionRef = useRef({ x: 0, y: 0 });

  // Check for reduced motion preference and mobile devices
  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleReducedMotion = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleReducedMotion);

    // Check for mobile/touch devices
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore - some browsers support this
        navigator.msMaxTouchPoints > 0;
      setIsMobile(isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotion);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    if (isReducedMotion || isMobile) {
      return;
    }

    const animate = () => {
      // Smooth easing factor (lower = smoother, more delay)
      const easing = 0.15;

      positionRef.current.x +=
        (mousePosition.x - positionRef.current.x) * easing;
      positionRef.current.y +=
        (mousePosition.y - positionRef.current.y) * easing;

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
  }, [mousePosition, isReducedMotion, isMobile]);

  // Track mouse movement
  useEffect(() => {
    if (isReducedMotion || isMobile) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isReducedMotion, isMobile]);

  // Detect hover over interactive elements
  useEffect(() => {
    if (isReducedMotion || isMobile) {
      return;
    }

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    // Select all interactive elements
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

  // Don't render on mobile or if reduced motion is preferred
  if (isReducedMotion || isMobile) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${displayPosition.x}px`,
        top: `${displayPosition.y}px`,
        transform: `translate(-50%, -50%) scale(${
          isHoveringInteractive ? 0.6 : 1
        })`,
        transition: "transform 0.3s ease-out",
        willChange: "transform",
      }}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white"
        style={{
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

