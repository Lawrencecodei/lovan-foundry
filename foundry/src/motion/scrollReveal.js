/*
  Shared GSAP mechanics. These functions know HOW to animate (stagger timing,
  scroll-trigger setup, cleanup) but nothing about WHAT it should look like —
  that's decided per client by the frontend-design skill, which should pass in
  its own easing/duration choices pulled from tokens.css, not hardcode new ones
  here.

  Import in a client project as:
    import { staggerReveal } from '../../foundry/src/motion/scrollReveal';
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals a group of elements with a staggered entrance as they scroll into view.
 * @param {string} selector - CSS selector for the elements to reveal
 * @param {object} options
 * @param {number} [options.stagger=0.08] - delay between each element, in seconds
 * @param {string} [options.from='bottom'] - direction the elements animate in from
 * @param {gsap.EaseString} [options.ease] - defaults to var(--ease-standard) if unset
 */
export function staggerReveal(selector, options = {}) {
  const { stagger = 0.08, from = "bottom", ease = "power3.out" } = options;

  const offset = { bottom: { y: 32 }, left: { x: -32 }, right: { x: 32 } }[from] ?? { y: 32 };

  return gsap.from(selector, {
    ...offset,
    opacity: 0,
    duration: 0.9,
    ease,
    stagger,
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      once: true,
    },
  });
}

/**
 * Cleans up all ScrollTriggers — call on route change / unmount in SPA contexts
 * to avoid stacking duplicate triggers.
 */
export function clearScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
