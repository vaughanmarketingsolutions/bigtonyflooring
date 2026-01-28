import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, PHONE_NUMBER, LOGO_URL, BRAND_NAME } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-stone-200 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center py-1 group" onClick={closeMenu}>
            <img 
              src={LOGO_URL} 
              alt={BRAND_NAME} 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    location.pathname === item.path ? 'text-[#014E86]' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center text-stone-900 font-bold hover:text-[#014E86] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {PHONE_NUMBER}
              </a>
              <Link to="/contact">
                <Button size="sm">Get Quote</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900 focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-stone-100 border-t border-stone-200">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`text-lg font-bold uppercase ${
                  location.pathname === item.path ? 'text-[#014E86]' : 'text-stone-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-stone-300 my-2" />
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="flex items-center justify-center w-full py-3 bg-stone-200 rounded font-bold text-stone-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {PHONE_NUMBER}
            </a>
            <Link to="/contact" onClick={closeMenu}>
              <Button fullWidth>Get a Free Estimate</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;