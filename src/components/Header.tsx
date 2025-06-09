import React, { useState, useEffect } from "react";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-white group"
          >
            <div className="relative flex items-center transition-transform duration-300 transform group-hover:scale-105">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                className="overflow-visible"
              >
                {/* Logo background with gradient */}
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#aaaaaa" />
                  </linearGradient>
                </defs>

                {/* Logo shape */}
                <rect
                  x="2"
                  y="2"
                  width="40"
                  height="40"
                  rx="10"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:stroke-white"
                />

                {/* JD text */}
                <text
                  x="22"
                  y="27"
                  fontFamily="Arial, sans-serif"
                  fontSize="20"
                  fontWeight="bold"
                  fill="url(#logoGradient)"
                  textAnchor="middle"
                  className="transition-all duration-300 group-hover:fill-white"
                >
                  JD
                </text>

                {/* Decorative accent lines */}
                <line
                  x1="12"
                  y1="32"
                  x2="32"
                  y2="32"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                />
                <line
                  x1="32"
                  y1="12"
                  x2="32"
                  y2="32"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
              </svg>

              {/* Animated light effect */}
              <div className="absolute -inset-1 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
