"use client";

import { useEffect } from "react";

export function PointerLight() {
  useEffect(() => {
    let frame = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let activeGlass: HTMLElement | null = null;
    let glassX = 50;
    let glassY = 50;
    let targetGlassX = 50;
    let targetGlassY = 50;
    let tiltX = 0;
    let tiltY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let lastScrollY = window.scrollY;
    let scrollFrame = 0;
    let lastFrameTime = 0;
    let lastToneCheck = 0;
    let scrollEndTimer = 0;

    const glassSelector = [
      ".button",
      ".desktop-nav a",
      ".mobile-menu summary",
      ".mobile-menu nav a",
      ".equation-card",
      ".process-card",
      ".claim-card",
      ".sensor-panel",
      ".cta-panel",
      ".question-grid article",
      ".partner-grid article",
      ".evidence-levels article",
      ".claim-register article",
      ".verification-stack div",
      ".program-list article",
      ".outcome-list p",
      ".team-grid a",
      ".achievement-grid article",
      ".greentech-feature",
      ".greentech-feature__post-link",
      ".page-hero__aside",
      ".story-stage__label",
    ].join(",");

    document
      .querySelectorAll<HTMLElement>(glassSelector)
      .forEach((element) => element.setAttribute("data-liquid-glass", ""));

    const render = (time: number) => {
      const delta = Math.min((time - lastFrameTime) / 1000 || 1 / 60, 0.05);
      const pointerEase = 1 - Math.exp(-11 * delta);
      const lensEase = 1 - Math.exp(-14 * delta);
      const tiltEase = 1 - Math.exp(-9 * delta);
      lastFrameTime = time;

      currentX += (targetX - currentX) * pointerEase;
      currentY += (targetY - currentY) * pointerEase;
      glassX += (targetGlassX - glassX) * lensEase;
      glassY += (targetGlassY - glassY) * lensEase;
      tiltX += (targetTiltX - tiltX) * tiltEase;
      tiltY += (targetTiltY - tiltY) * tiltEase;

      document.documentElement.style.setProperty("--pointer-x", `${currentX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${currentY}px`);
      if (activeGlass) {
        activeGlass.style.setProperty("--glass-x", `${glassX}%`);
        activeGlass.style.setProperty("--glass-y", `${glassY}%`);
        activeGlass.style.setProperty("--glass-tilt-x", `${tiltX}px`);
        activeGlass.style.setProperty("--glass-tilt-y", `${tiltY}px`);
      }

      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1 ||
        Math.abs(targetGlassX - glassX) > 0.1 ||
        Math.abs(targetGlassY - glassY) > 0.1 ||
        Math.abs(targetTiltX - tiltX) > 0.05 ||
        Math.abs(targetTiltY - tiltY) > 0.05
      ) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
        lastFrameTime = 0;
      }
    };

    const update = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(glassSelector)
          : null;

      if (target !== activeGlass) {
        activeGlass?.removeAttribute("data-liquid-active");
        activeGlass?.style.removeProperty("--glass-tilt-x");
        activeGlass?.style.removeProperty("--glass-tilt-y");
        activeGlass = target;
        activeGlass?.setAttribute("data-liquid-active", "");
        glassX = targetGlassX = 50;
        glassY = targetGlassY = 50;
        tiltX = tiltY = targetTiltX = targetTiltY = 0;
      }

      if (activeGlass) {
        const bounds = activeGlass.getBoundingClientRect();
        targetGlassX = ((event.clientX - bounds.left) / bounds.width) * 100;
        targetGlassY = ((event.clientY - bounds.top) / bounds.height) * 100;
        targetTiltX = ((targetGlassX - 50) / 50) * 3.5;
        targetTiltY = ((targetGlassY - 50) / 50) * 3.5;
      }

      if (!frame) frame = requestAnimationFrame(render);
    };
    const leave = () => {
      activeGlass?.removeAttribute("data-liquid-active");
      activeGlass = null;
      targetTiltX = targetTiltY = 0;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const press = (event: PointerEvent) => {
      update(event);
      document.documentElement.classList.add("is-pressing");
      activeGlass?.setAttribute("data-liquid-pressed", "");
    };
    const release = (event: PointerEvent) => {
      document.documentElement.classList.remove("is-pressing");
      activeGlass?.removeAttribute("data-liquid-pressed");
      if (event.pointerType !== "mouse") leave();
    };
    const updateScrollState = (time = 0) => {
      const root = document.documentElement;
      const scrollY = window.scrollY;
      root.classList.toggle("has-scrolled", scrollY > 24);
      root.classList.toggle("scrolling-down", scrollY > lastScrollY && scrollY > 120);

      if (time - lastToneCheck > 120 || time === 0) {
        const underHeader = document
          .elementsFromPoint(window.innerWidth / 2, 92)
          .find(
            (element) =>
              !element.closest(".site-header") &&
              element.matches("section, main, [class*='section']"),
          );
        root.dataset.navTone = underHeader?.classList.contains("light-section")
          ? "light"
          : "dark";
        lastToneCheck = time;
      }

      lastScrollY = scrollY;
      scrollFrame = 0;
      window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(
        () => root.classList.remove("scrolling-down"),
        150,
      );
    };
    const requestScrollState = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
    };

    window.addEventListener("pointermove", update, { passive: true });
    window.addEventListener("pointerleave", leave, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("pointercancel", release, { passive: true });
    window.addEventListener("scroll", requestScrollState, { passive: true });
    updateScrollState();
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      window.clearTimeout(scrollEndTimer);
      window.removeEventListener("pointermove", update);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("scroll", requestScrollState);
    };
  }, []);

  return (
    <>
      <div className="ambient-optics" aria-hidden="true">
        <span className="ambient-optics__orb ambient-optics__orb--one" />
        <span className="ambient-optics__orb ambient-optics__orb--two" />
        <span className="ambient-optics__beam" />
      </div>
      <div className="pointer-light" aria-hidden="true" />
    </>
  );
}
