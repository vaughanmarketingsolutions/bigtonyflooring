import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            From classic hardwood to bomb-proof vinyl plank, we install it all with precision and care.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-lg shadow-xl overflow-hidden`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative group">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="w-8 h-8 text-[#014E86]" />
                    <span className="text-stone-500 font-bold tracking-widest text-sm uppercase">Professional Install</span>
                </div>
                
                <h2 className="text-3xl font-heading font-bold mb-4 text-stone-900">{service.title}</h2>
                <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                    {service.fullDesc}
                </p>

                <div className="mb-8">
                    <h4 className="font-bold text-stone-900 mb-3 uppercase text-sm">Why Choose This?</h4>
                    <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-stone-700">
                                <Check className="w-5 h-5 text-green-600 mr-2" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-end border-t border-stone-100 pt-6 mt-auto">
                    <Link to="/contact">
                        <Button variant="outline" size="sm" className="group">
                            Get Quote <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-20 text-center">
        <h3 className="text-2xl font-bold mb-6 text-stone-800">Need something custom? Removal? Repairs?</h3>
        <p className="text-stone-600 mb-8">We also handle floor leveling, subfloor repair, and baseboard installation.</p>
        <Link to="/contact"><Button>Talk to the team</Button></Link>
      </div>
    </div>
  );
};

export default Services;