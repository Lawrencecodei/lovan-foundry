/*
  Layout mechanics only — no aesthetic opinions live here. This gives every
  client project a consistent, reliable grid primitive to build on top of,
  without pre-deciding what any client's grid should look like (columns,
  gaps, and breakpoints are passed in, not hardcoded).
*/

export function Grid({ columns = 12, gap = "var(--space-unit)", children, className = "", ...rest }) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function GridItem({ span = 1, start, children, className = "", ...rest }) {
  return (
    <div
      className={className}
      style={{
        gridColumn: start ? `${start} / span ${span}` : `span ${span}`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
