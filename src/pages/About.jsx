import "./About.css";

const stats = [
  { value: "5 mnt", label: "Waktu setup" },
  { value: "1.200+", label: "Bisnis terdaftar" },
  { value: "24/7", label: "Dukungan tim" },
  { value: "99,9%", label: "Uptime layanan" },
];

const About = () => {
  return (
    <section className="section" id="tentang">
      <div className="container about__inner">
        <div className="about__text">
          <span className="eyebrow">Tentang</span>
          <h2>Dibuat untuk bisnis yang sedang bertumbuh</h2>
          <p>
            BrandKu lahir dari satu pertanyaan sederhana: kenapa mengelola
            bisnis kecil harus serumit itu? Kami menggabungkan manajemen,
            pemasaran, dan laporan dalam satu tempat.
          </p>
          <p>
            Tanpa keahlian teknis, tanpa banyak aplikasi terpisah. Cukup buka
            satu dashboard, dan semuanya sudah ada di sana.
          </p>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
