import { useState } from "react";
import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/merch", label: "Merch" },
  { to: "/pricing", label: "Pricing" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow">
      <h1 className="font-bold">Header</h1>

      <button
        type="button"
        className="md:hidden text-2xl"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "✕" : "☰"}
      </button>

      <nav
        aria-label="Navigasi utama"
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-5`}>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-gray-700 hover:text-gray-900 ${isActive ? "font-semibold text-gray-900" : ""}`
            }>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
