import heroImage from "../assets/hero.png";
import "./Hero.css";

const Hero = ({ title, subtitle, buttonText, onTap }) => {
  return (
    <section className="hero" id="beranda">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Platform Bisnis</span>

          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onTap}>
              {buttonText}
            </button>
            <a href="#fitur" className="btn btn--ghost">
              Lihat Fitur
            </a>
          </div>

          <p className="hero__note">
            Gratis 14 hari · Tanpa kartu kredit · Batal kapan saja
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
