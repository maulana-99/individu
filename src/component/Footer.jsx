import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <span className="footer__logo-mark">B</span>
              BrandKu
            </div>
            <p className="footer__tagline">
              Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan
              bisnis kecil.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Produk</h4>
            <ul className="footer__list">
              <li><a href="#fitur" className="footer__link">Fitur</a></li>
              <li><a href="#harga" className="footer__link">Harga</a></li>
              <li><a href="#tentang" className="footer__link">Tentang</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Bantuan</h4>
            <ul className="footer__list">
              <li><a href="#beranda" className="footer__link">Pusat Bantuan</a></li>
              <li><a href="#beranda" className="footer__link">Hubungi Kami</a></li>
              <li><a href="#beranda" className="footer__link">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} BrandKu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
