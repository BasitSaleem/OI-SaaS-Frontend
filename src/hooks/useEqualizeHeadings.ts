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
    const observer = new ResizeObserver(equalize);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // deps are forwarded from the caller
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
