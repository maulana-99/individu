import "./Pricing.css";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Buat kamu yang baru mulai.",
    price: "Rp0",
    period: "/bulan",
    featured: false,
    features: ["1 pengguna", "Laporan dasar", "Dukungan email"],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Paling pas untuk bisnis berkembang.",
    price: "Rp149rb",
    period: "/bulan",
    featured: true,
    features: [
      "5 pengguna",
      "Laporan real-time",
      "Otomatisasi tugas",
      "Dukungan prioritas",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Untuk tim yang sudah besar.",
    price: "Rp399rb",
    period: "/bulan",
    featured: false,
    features: [
      "Pengguna tanpa batas",
      "Laporan khusus",
      "Integrasi API",
      "Manajer akun khusus",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="section section--alt" id="harga">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">Harga</span>
          <h2>Pilih paket yang sesuai</h2>
          <p className="section__subtitle">
            Mulai gratis, tingkatkan kapan pun bisnismu siap.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <article
              className={`plan${plan.featured ? " plan--featured" : ""}`}
              key={plan.id}
            >
              {plan.featured && <span className="plan__badge">Paling Populer</span>}

              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__description">{plan.description}</p>

              <div className="plan__price">
                <span className="plan__amount">{plan.price}</span>
                <span className="plan__period">{plan.period}</span>
              </div>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li className="plan__feature" key={feature}>
                    <span className="plan__check" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn plan__cta ${
                  plan.featured ? "btn--primary" : "btn--ghost"
                }`}
              >
                Pilih {plan.name}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
