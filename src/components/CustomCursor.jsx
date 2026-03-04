import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const rafId = useRef(null);

  const animate = useCallback(() => {
    // Smooth trailing for the ring
    ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${hovering.current ? 1.8 : 1})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (!visible.current && dot && ring) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        visible.current = true;
      }
    };

    const onMouseEnter = () => {
      if (dot && ring) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        visible.current = true;
      }
    };

    const onMouseLeave = () => {
      if (dot && ring) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        visible.current = false;
      }
    };

    const onHoverStart = () => {
      hovering.current = true;
      if (dot) dot.classList.add("cursor-dot--hover");
      if (ring) ring.classList.add("cursor-ring--hover");
    };

    const onHoverEnd = () => {
      hovering.current = false;
      if (dot) dot.classList.remove("cursor-dot--hover");
      if (ring) ring.classList.remove("cursor-ring--hover");
    };

    // Interactive element selectors
    const interactiveSelector =
      "a, button, .tech-badge, .portfolio-box, .nav-link, .btn, input, textarea, select, [role='button']";

    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", onHoverStart);
        el.addEventListener("mouseleave", onHoverEnd);
      });
    };

    const removeHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Observe DOM changes to reattach hover listeners on new elements
    addHoverListeners();
    const observer = new MutationObserver(() => {
      removeHoverListeners();
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      removeHoverListeners();
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
