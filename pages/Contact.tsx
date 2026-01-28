import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Calculator from '../components/Calculator';
import { PHONE_NUMBER, EMAIL_ADDRESS, BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      
      <div className="bg-[#014E86] py-16">
          <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase italic">Let's Get Your Floors Done</h1>
              <p className="text-xl opacity-90 font-light">Calculate your estimate or reach out to us directly.</p>
          </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Calculator Section */}
            <div className="lg:w-2/3 p-0 bg-white flex flex-col min-h-[700px]">
                <div className="p-8 md:p-12 pb-4">
                  <h2 className="text-3xl font-heading font-black text-stone-800 uppercase italic">Quote Calculator</h2>
                  <p className="text-stone-500 mt-2 font-bold uppercase tracking-widest text-xs">Professional pricing in seconds</p>
                </div>
                
                <div className="flex-grow">
                    <Calculator />
                </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:w-1/3 bg-stone-900 text-stone-300 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                    <h3 className="text-white font-heading font-black text-xl mb-8 uppercase tracking-wider italic">Direct Contact</h3>
                    <ul className="space-y-10">
                        <li className="flex items-start">
                            <MapPin className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-black uppercase text-xs tracking-widest mb-1">Service Area</span>
                                <span className="text-lg">Based in Wilmington, NC<br />Serving NC, SC, & VA</span>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-black uppercase text-xs tracking-widest mb-1">Direct Line</span>
                                <a href={`tel:${PHONE_NUMBER}`} className="text-white font-black text-3xl hover:text-[#014E86] transition-colors italic leading-none">{PHONE_NUMBER}</a>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-black uppercase text-xs tracking-widest mb-1">Email Support</span>
                                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-lg hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-12 bg-stone-800/50 p-8 border border-white/5">
                    <h3 className="text-white font-heading font-black text-xl mb-6 uppercase tracking-wider italic">Hours</h3>
                    <ul className="space-y-4 text-sm font-bold">
                        <li className="flex justify-between border-b border-stone-700 pb-2">
                            <span className="text-stone-500 uppercase">Mon - Fri</span>
                            <span className="text-white">7:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-stone-700 pb-2">
                            <span className="text-stone-500 uppercase">Saturday</span>
                            <span className="text-white">8:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-stone-500 uppercase">Sunday</span>
                            <span className="text-[#014E86]">CLOSED</span>
                        </li>
                    </ul>
                </div>
                
                {/* Mobile Call CTA */}
                <div className="mt-10 lg:hidden">
                    <a href={`tel:${PHONE_NUMBER}`}>
                        <Button fullWidth variant="secondary" size="xl" className="py-6 font-black text-xl">CALL US NOW</Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;