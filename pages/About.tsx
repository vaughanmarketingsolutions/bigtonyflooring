import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
                <div className="w-full aspect-[3/4] bg-stone-200 rounded-lg overflow-hidden shadow-2xl relative z-10">
                    <img src="https://picsum.photos/id/447/800/1000" alt="Big Tony" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <p className="text-white font-heading font-bold text-2xl">Tony "Big Tony" Rossi</p>
                        <p className="text-stone-300">Founder & Lead Installer</p>
                    </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-red-700 rounded-lg z-0"></div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
                <h1 className="text-5xl font-heading font-bold text-stone-900 mb-6">Not a Franchise.<br/>Just a Guy Who Loves Floors.</h1>
                <div className="w-20 h-2 bg-red-700 mb-8"></div>
                
                <div className="prose prose-lg text-stone-600 mb-8">
                    <p>
                        I've been in the construction and flooring industry for years, learning the trade from the ground up—literally. 
                    </p>
                    <p>
                        In 2018, I decided it was time to do things my way. I established <strong>Big Tony’s Flooring</strong> right here in Wilmington because I was tired of seeing homeowners get ripped off by big box stores that send unqualified subcontractors to do a rush job.
                    </p>
                    <p>
                        When you hire me, you don't get a salesman. You get me. I'm the one measuring. I'm the one installing. And I'm the one making sure you're smiling when I leave. We specialize in the stuff that lasts: Hardwood, LVP, LVT, and Tile.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-700 mb-10">
                    <h3 className="font-bold font-heading text-xl mb-4">The Big Tony Promise</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-700 mr-3" /> No hidden fees, ever.</li>
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-700 mr-3" /> I treat your home like my mother's home.</li>
                        <li className="flex items-center"><CheckCircle className="w-5 h-5 text-red-700 mr-3" /> If it's not right, I fix it. Period.</li>
                    </ul>
                </div>

                <div className="bg-stone-900 text-white p-6 rounded-lg text-center">
                    <p className="font-heading font-bold text-lg mb-2">"The guy you see in the logo? Yeah, that's me."</p>
                    <Link to="/contact">
                        <Button variant="secondary" fullWidth className="mt-4">Hire The Real Deal</Button>
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;