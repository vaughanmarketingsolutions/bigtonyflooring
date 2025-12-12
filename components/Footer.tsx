import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { SERVICES, PHONE_NUMBER, EMAIL_ADDRESS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                  src={LOGO_URL} 
                  alt="Big Tony's Flooring" 
                  className="h-16 w-auto object-contain bg-white rounded p-1" 
               />
               <span className="font-heading font-bold text-2xl text-white uppercase">Big Tony's</span>
            </div>
            <p className="mb-6 leading-relaxed">
              We don't cut corners. We cut floors. Licensed, insured, and dedicated to old-school craftsmanship with modern materials. Est. 2018.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100094453009195&ref=_xav_ig_profile_page_web#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-stone-800 hover:bg-red-700 text-white rounded transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/bigtonysflooring/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-stone-800 hover:bg-red-700 text-white rounded transition-colors"
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
                  <Link to="/services" className="hover:text-red-500 transition-colors">{service.title}</Link>
                </li>
              ))}
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Floor Removal & Repair</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                <span>Based in Wilmington, NC<br />Serving NC, SC, & VA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-red-600 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-red-600 shrink-0" />
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
                <span className="text-red-500 font-bold">Closed</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Big Tony's Flooring. All Rights Reserved. Built for speed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;