import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { BRAND_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
                <div className="w-full aspect-[3/4] bg-stone-200 rounded-lg overflow-hidden shadow-2xl relative z-10">
                    <img 
                      src="https://i.imgur.com/nC57030.png" 
                      alt="Tony Gori" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <p className="text-white font-heading font-bold text-3xl">Tony Gori</p>
                        <p className="text-stone-300 text-lg">Owner of 421Floors</p>
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#014E86] rounded-lg z-0"></div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
                <h1 className="text-5xl font-heading font-bold text-stone-900 mb-6">Not a Franchise.<br/>Local Craftsmen Who Care.</h1>
                <div className="w-20 h-2 bg-[#014E86] mb-8"></div>
                
                <div className="prose prose-lg text-stone-600 mb-8">
                    <p>
                        We've been in the construction and flooring industry for years, learning the trade from the ground up—literally. 
                    </p>
                    <p>
                        Established right here in Wilmington, <strong>{BRAND_NAME}</strong> was built because we were tired of seeing homeowners get ripped off by big box stores that send unqualified subcontractors to do a rush job.
                    </p>
                    <p>
                        When you hire us, you don't get a salesman. You get experts. We specialize in the stuff that lasts: Hardwood, LVP, LVT, and Tile. We treat your subfloor with the respect it deserves, ensuring a foundation that lasts decades.
                    </p>
                </div>

                <div className="bg-stone-900 text-white p-8 rounded-lg text-center mb-10">
                    <p className="font-heading font-bold text-2xl mb-4">"Quality floors, every single time."</p>
                    <p className="text-stone-400 mb-6 italic">We stand behind every plank, tile, and board we lay. Your home is your biggest investment, and we treat it that way.</p>
                    <Link to="/contact">
                        <Button variant="secondary" fullWidth className="text-lg py-4">Hire The Professionals</Button>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;