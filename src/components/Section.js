export default function Section({ title, children, description }) {
  return (
    <section className="section">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-desc">{description}</p>}
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}


