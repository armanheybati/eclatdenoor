"use client";

import { useEffect } from "react";

const selector = "[data-scroll-reveal='topic']";

export function ScrollReveal() {
  useEffect(() => {
    const topics = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (!topics.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      topics.forEach((topic) => topic.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.1,
      },
    );

    topics.forEach((topic) => observer.observe(topic));

    return () => observer.disconnect();
  }, []);

  return null;
}
