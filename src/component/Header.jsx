import { useState } from "react";
import "./Header.css";

const navItems = [
  { href: "#fitur", label: "Fitur" },
  { href: "#tentang", label: "Tentang" },
  { href: "#harga", label: "Harga" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#beranda" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-mark">B</span>
          BrandKu
        </a>

        <button
          type="button"
          className={`header__toggle${isOpen ? " is-open" : ""}`}
          aria-label="Buka menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

        <nav className={`header__nav${isOpen ? " is-open" : ""}`}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="header__link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#harga" className="btn btn--primary header__cta" onClick={closeMenu}>
            Mulai Gratis
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
