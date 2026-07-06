"use client";
import { useLayoutEffect, RefObject } from "react";

export function useEqualizeHeadings(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  deps: React.DependencyList
) {
  useLayoutEffect(() => {
    const equalize = () => {
      const container = ref.current;
      if (!container) return;
      const els = container.querySelectorAll<HTMLElement>(selector);

      // Reset to natural height first
      els.forEach((el) => { el.style.height = ""; });

      // Group elements by their top position → same visual row
      const rows = new Map<number, HTMLElement[]>();
      els.forEach((el) => {
        const top = Math.round(el.getBoundingClientRect().top);
        if (!rows.has(top)) rows.set(top, []);
        rows.get(top)!.push(el);
      });

      // Set every element in a row to the tallest height in that row
      rows.forEach((group) => {
        const maxH = Math.max(...group.map((el) => el.offsetHeight));
        group.forEach((el) => { el.style.height = `${maxH}px`; });
      });
    };

    equalize();

    // Only re-equalize when the container's WIDTH changes (breakpoint /
    // reflow). Height changes are ignored on purpose: hover animations (e.g.
    // the Read Article button expanding) grow the container, and reacting to
    // that would re-run equalize every frame — which rewrites heading heights,
    // resizes the container again, and loops. That feedback loop is what makes
    // the cards shiver on hover.
    let lastWidth = ref.current?.getBoundingClientRect().width ?? 0;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (Math.round(width) === Math.round(lastWidth)) return;
      lastWidth = width;
      equalize();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // deps are forwarded from the caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
