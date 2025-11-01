import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <span className="bg-primary text-white text-lg font-bold px-3 py-1 rounded-md mr-2">JD</span>
              <span className="text-xl font-bold text-text">John Doe</span>
            </div>
            <p className="text-text/70 mb-6">
              A passionate frontend developer dedicated to creating beautiful, responsive, and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, url: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
                { icon: Mail, url: 'mailto:john.doe@example.com', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center text-text/60 hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-lg font-semibold text-text mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-text/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-text mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text/60">Email</p>
                  <a 
                    href="mailto:john.doe@example.com" 
                    className="text-text hover:text-primary transition-colors duration-300"
                  >
                    john.doe@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text/60">Location</p>
                  <p className="text-text">San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-text mb-6">Newsletter</h3>
            <p className="text-text/70 mb-4">Subscribe to my newsletter for the latest updates and articles.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200 text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-button-hover transition-colors duration-300 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-text/60 hover:text-primary transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-text/60 hover:text-primary transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-button-hover transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
