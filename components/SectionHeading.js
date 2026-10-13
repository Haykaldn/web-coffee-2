export default function SectionHeading({ eyebrow, title, children, className = "" }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div>
        <p className="eyebrow" data-reveal="up">
          {eyebrow}
        </p>
        <h2 data-reveal="text" style={{ "--delay": "80ms" }}>
          {title}
        </h2>
      </div>
      {children && (
        <p data-reveal="up" style={{ "--delay": "220ms" }}>
          {children}
        </p>
      )}
    </div>
  );
}
