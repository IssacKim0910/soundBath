import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoJpg from '../assets/logo.jpg';
import { servicesData } from '../data';

export default function Header({ isScrolled }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-black bg-opacity-50'}
  `;

  const linkStyle = "text-gray-300 hover:text-white transition-colors duration-300";
  const activeLinkStyle = { color: 'white', fontWeight: 'bold' };

  const isServicesActive = location.pathname.startsWith('/services') || 
                           location.pathname.startsWith('/exhibitions') || 
                           location.pathname.startsWith('/sound-bath');

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Link to="/">
              <img src={logoJpg} alt="Logo" className="w-12 h-12 rounded-full" />
            </Link>
          </div>

          {/* Centered Title (Desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <h1 className="text-white text-2xl font-serif">SpotLight Coffee</h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 z-10">
            <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
            <NavLink to="/about" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>회사소개</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <NavLink 
                to="/services" 
                className={linkStyle} 
                style={({ isActive }) => (isActive || isServicesActive) ? activeLinkStyle : undefined}
              >
                Our Services
              </NavLink>
              <div className="hidden group-hover:block absolute top-full pt-4 left-1/2 -translate-x-1/2 w-48 z-50">
                <div className="bg-black bg-opacity-90 rounded-md shadow-lg">
                  <div className="p-2">
                    {servicesData.map(service => {
                      const destination = service.link || `/services/${service.slug}`;
                      return (
                        <Link
                          key={service.slug}
                          to={destination}
                          className="block text-center px-4 py-2 text-sm text-gray-300 hover:bg-amber-500 hover:text-black rounded-md transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/contact" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
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
          <nav className="flex flex-col space-y-8 text-2xl">
            <NavLink to="/" onClick={toggleMobileMenu} className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
            <NavLink to="/services" onClick={toggleMobileMenu} className={linkStyle} style={({ isActive }) => (isActive || isServicesActive) ? activeLinkStyle : undefined}>Services</NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu} className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
