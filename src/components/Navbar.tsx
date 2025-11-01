import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary flex items-center"
          >
            <span className="bg-primary text-white px-3 py-1 rounded-md mr-2">JD</span>
            <span className="text-text">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text hover:text-primary transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-button-hover transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-text hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mx-4 mt-2 px-4 py-2 text-center bg-primary text-white rounded-md hover:bg-button-hover transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
