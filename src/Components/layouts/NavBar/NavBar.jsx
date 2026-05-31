import { useState, useEffect } from 'react';

export const NavBar = ({ brand, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const toggMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  const linkClass = (href) =>
    `text-sm tracking-wide uppercase transition-all duration-300 ${
      activeSection === href
        ? 'text-violet-400 border-b border-violet-400 pb-1'
        : 'text-neutral-400 hover:text-white'
    }`;

  return (
    <nav className="bg-neutral-950/90 backdrop-blur-md text-neutral-200 px-4 sm:px-8 py-4 border-b border-neutral-800/50 w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#inicio" className="font-display text-xl font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          {brand}
        </a>

        <button
          onClick={toggMenu}
          className="sm:hidden border border-neutral-700 text-neutral-300 py-2 px-4 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all duration-300 text-sm tracking-wide"
        >
          {isOpen ? 'Cerrar' : 'Menú'}
        </button>

        {isOpen && (
          <ul className="sm:hidden absolute top-14 left-0 right-0 bg-neutral-950/95 backdrop-blur-md py-6 px-8 border-b border-neutral-800/50 flex flex-col space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleClick} className={linkClass(link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden sm:flex space-x-10">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
