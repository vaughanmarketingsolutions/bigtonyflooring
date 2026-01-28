import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { SERVICES, PHONE_NUMBER, EMAIL_ADDRESS, LOGO_URL, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                  src={LOGO_URL} 
                  alt={BRAND_NAME} 
                  className="h-16 w-auto object-contain bg-white rounded p-1" 
               />
            </div>
            <p className="mb-6 leading-relaxed">
              We don't cut corners. We cut floors. {BRAND_NAME} is dedicated to old-school craftsmanship with modern materials. Licensed, insured, and serving the community with integrity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100094453009195" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-stone-800 hover:bg-[#014E86] text-white rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/421floors/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-stone-800 hover:bg-[#014E86] text-white rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to="/wilmington-flooring-services" className="hover:text-[#014E86] transition-colors">{service.title}</Link>
                </li>
              ))}
              <li><Link to="/wilmington-flooring-services" className="hover:text-[#014E86] transition-colors">Floor Removal & Repair</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#014E86] shrink-0" />
                <span>Based in Wilmington, NC<br />Serving NC, SC, & VA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#014E86] shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#014E86] shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white font-bold">7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Saturday</span>
                <span className="text-white font-bold">8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span className="text-[#014E86] font-bold">Closed</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All Rights Reserved.</p>
          <p className="text-stone-500">
            Built and Hosted by{' '}
            <a 
              href="https://vaughanms.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-stone-300 font-bold hover:text-white transition-colors"
            >
              VaughanMS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;