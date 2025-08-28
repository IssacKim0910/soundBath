import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoJpg from '../assets/logo.jpg';

export default function Header({ isScrolled, handleScrollTo }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ hash, children, isMobile }) => {
    const className = isMobile 
      ? "block py-2 text-center text-2xl text-gray-300 hover:text-white transition-colors duration-300"
      : "text-gray-300 hover:text-white transition-colors duration-300";

    const handleClick = (e) => {
      if (isMobile) {
        toggleMobileMenu();
      }
      if (location.pathname === '/') {
        e.preventDefault();
        handleScrollTo(hash);
      }
    };

    if (location.pathname !== '/') {
      return (
        <Link to="/" state={{ scrollTo: hash }} className={className} onClick={isMobile ? toggleMobileMenu : undefined}>
          {children}
        </Link>
      );
    }

    return (
      <a href={hash} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  };

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-black bg-opacity-50'}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <NavLink hash="#main">
              <img src={logoJpg} alt="Logo" className="w-12 h-12 rounded-full" />
            </NavLink>
          </div>

          {/* Centered Title (Desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <h1 className="text-white text-2xl font-serif">SpotLight Coffee</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 z-10">
            <NavLink hash="#main">Home</NavLink>
            <NavLink hash="#about">About</NavLink>
            <NavLink hash="#services">Services</NavLink>
            <NavLink hash="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center pt-24 md:hidden">
          <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-8">
            <NavLink hash="#main" isMobile={true}>Home</NavLink>
            <NavLink hash="#about" isMobile={true}>About</NavLink>
            <NavLink hash="#services" isMobile={true}>Services</NavLink>
            <NavLink hash="#contact" isMobile={true}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
