import "./CardGrid.css";

const CardGrid = ({ features = [] }) => {
  return (
    <section className="section section--alt" id="fitur">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">Fitur</span>
          <h2>Semua yang kamu butuhkan</h2>
          <p className="section__subtitle">
            Dirancang supaya bisnis kecil bisa jalan cepat tanpa ribet.
          </p>
        </div>

        <div className="card-grid">
          {features.length === 0 ? (
            <p className="card-grid__empty">Belum ada fitur untuk ditampilkan.</p>
          ) : (
            features.map((feature) => (
              <article className="card" key={feature.id}>
                <div className="card__icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="card__title">{feature.title}</h3>
                <p className="card__subtitle">{feature.subtitle}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
