import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import { PHONE_NUMBER, EMAIL_ADDRESS, BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      
      <div className="bg-[#014E86] py-16">
          <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Get Your Floors Done</h1>
              <p className="text-xl opacity-90">Send us a message below and Anthony will get back to you ASAP.</p>
          </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Section - Replaced with the LeadConnector Iframe */}
            <div className="lg:w-2/3 p-0 bg-white flex flex-col">
                <div className="p-8 md:p-12 pb-4">
                  <h2 className="text-2xl font-heading font-bold text-stone-800">Request a Free Estimate</h2>
                  <p className="text-stone-500 mt-2">Fill out the details below and we'll touch base shortly.</p>
                </div>
                
                <div className="w-full h-[750px] relative overflow-hidden px-4 md:px-8">
                  <iframe
                      src="https://api.leadconnectorhq.com/widget/form/uW5o4MLb4KvadHnnyfuU"
                      style={{ 
                          width: '100%', 
                          height: '100%', 
                          border: 'none',
                      }}
                      id="contact-page-lead-form" 
                      data-layout="{'id':'INLINE'}"
                      title="Contact Form"
                  >
                  </iframe>
                </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:w-1/3 bg-stone-900 text-stone-300 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                <div>
                    <h3 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Contact Info</h3>
                    <ul className="space-y-8">
                        <li className="flex items-start">
                            <MapPin className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-bold mb-1">Service Area</span>
                                <span className="text-sm">Based in Wilmington, NC<br />Serving NC, SC, & VA</span>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-bold mb-1">Phone</span>
                                <a href={`tel:${PHONE_NUMBER}`} className="text-white font-bold text-xl hover:text-[#014E86] transition-colors">{PHONE_NUMBER}</a>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-6 h-6 mr-4 text-[#014E86] shrink-0" />
                            <div>
                                <span className="block text-white font-bold mb-1">Email</span>
                                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-12 bg-stone-800/50 p-6 rounded-lg">
                    <h3 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Business Hours</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-stone-700 pb-2">
                            <span>Monday - Friday</span>
                            <span className="text-white font-medium">7:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-stone-700 pb-2">
                            <span>Saturday</span>
                            <span className="text-white font-medium">8:00 AM - 2:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sunday</span>
                            <span className="text-[#014E86] font-bold">Closed</span>
                        </li>
                    </ul>
                </div>
                
                {/* Mobile Call CTA */}
                <div className="mt-8 lg:hidden">
                    <a href={`tel:${PHONE_NUMBER}`}>
                        <Button fullWidth variant="secondary" size="lg" className="py-5">Tap to Call Now</Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;