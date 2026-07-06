import React from "react";
import Link from "next/link";

/**
 * Inline internal-link syntax for plain-string content data.
 *
 * Content strings (industry/feature page data files) may embed links as
 * markdown-style `[anchor text](/target-url)`. Components that render those
 * strings pass them through renderRichText, which converts each match into a
 * Next <Link> and leaves the rest of the string untouched.
 *
 * Only site-internal targets (leading "/") are linkified — the pattern
 * deliberately rejects external URLs so content can never inject them.
 */
const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export function renderRichText(text: React.ReactNode): React.ReactNode {
  if (typeof text !== "string" || !text.includes("[")) return text;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <Link
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        className="text-inherit font-semibold no-underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (nodes.length === 0) return text; // "[" present but no valid link syntax
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default renderRichText;
