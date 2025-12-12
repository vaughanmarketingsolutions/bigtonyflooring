import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, BadgeDollarSign, MapPin, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Calculator from '../components/Calculator';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-stone-900">
            <img 
                src="https://picsum.photos/id/401/1600/900" 
                alt="Flooring Installation" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-red-700 px-3 py-1 mb-4 text-sm font-bold uppercase tracking-widest transform -skew-x-12">
                <span className="skew-x-12 block">Wilmington's Best Installer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              Floors Installed <span className="text-red-600">Right.</span><br/>
              Every Time.
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-lg leading-relaxed">
              Big Tony brings craftsmanship, speed, and honest pricing to every job. No hidden fees. No nonsense. Just damn good floors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="xl">Get a Free Estimate</Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-stone-900">
                    Call Big Tony Now
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-stone-400 text-sm font-medium">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span className="ml-2 text-white">5.0 Rating based on 100+ local jobs</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BOOSTERS */}
      <section className="bg-white py-12 border-b border-stone-200 -mt-10 relative z-20 container mx-auto rounded shadow-lg hidden md:block">
        <div className="grid grid-cols-4 gap-8 px-8">
            <div className="flex items-center space-x-4">
                <div className="bg-stone-100 p-3 rounded-full"><ShieldCheck className="w-8 h-8 text-red-700" /></div>
                <div><h3 className="font-bold font-heading">Licensed & Insured</h3><p className="text-sm text-stone-500">Fully protected.</p></div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-stone-100 p-3 rounded-full"><Star className="w-8 h-8 text-red-700" /></div>
                <div><h3 className="font-bold font-heading">Est. 2018</h3><p className="text-sm text-stone-500">Years of trust.</p></div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-stone-100 p-3 rounded-full"><BadgeDollarSign className="w-8 h-8 text-red-700" /></div>
                <div><h3 className="font-bold font-heading">Transparent Pricing</h3><p className="text-sm text-stone-500">No surprise bills.</p></div>
            </div>
             <div className="flex items-center space-x-4">
                <div className="bg-stone-100 p-3 rounded-full"><Clock className="w-8 h-8 text-red-700" /></div>
                <div><h3 className="font-bold font-heading">Fast Turnaround</h3><p className="text-sm text-stone-500">Done in days, not weeks.</p></div>
            </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-heading font-bold text-stone-900 mb-4">What We Do Best</h2>
                <div className="w-24 h-1 bg-red-700 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-red-700 group cursor-pointer">
                        <service.icon className="w-12 h-12 text-stone-400 group-hover:text-red-700 mb-4 transition-colors" />
                        <h3 className="font-bold font-heading text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-stone-500 mb-4">{service.shortDesc}</p>
                        <Link to="/services" className="text-red-700 font-bold text-sm flex items-center group-hover:underline">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FEATURE: BEFORE & AFTER */}
      <section className="py-20 bg-stone-900 text-white clip-path-slant">
        <div className="container mx-auto px-4 pb-20 pt-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-heading font-bold mb-4">The Big Tony Transformation</h2>
                    <p className="text-stone-400 text-lg">Don't just take our word for it. Slide to see how we turn tired, old floors into showroom-quality spaces.</p>
                </div>
                <Link to="/gallery" className="hidden md:block">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">View Full Gallery</Button>
                </Link>
            </div>
            
            <BeforeAfterSlider />

            <div className="mt-10 text-center md:hidden">
                 <Link to="/gallery">
                    <Button variant="outline" className="border-white text-white">View Full Gallery</Button>
                </Link>
            </div>
        </div>
      </section>

      {/* CALCULATOR & TESTIMONIALS SPLIT */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Testimonials */}
                <div>
                    <h2 className="text-3xl font-heading font-bold text-stone-900 mb-8">What The Neighborhood Says</h2>
                    <div className="space-y-6">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="bg-white p-6 rounded shadow-sm border-l-4 border-amber-400">
                                <div className="flex text-amber-400 mb-2">
                                    {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-stone-700 italic mb-4">"{t.text}"</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-stone-900">{t.name}</span>
                                    <span className="text-stone-500">{t.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                         <p className="font-heading font-bold text-xl text-stone-400 uppercase">Trust the guys who do it right.</p>
                    </div>
                </div>

                {/* Calculator */}
                <div className="lg:sticky lg:top-24">
                     <Calculator />
                </div>
            </div>
        </div>
      </section>

      {/* SERVICE AREA MAP */}
      <section className="bg-stone-200 relative py-12 md:py-20">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                 {/* Map Container */}
                 <div className="w-full max-w-4xl h-[400px] shadow-2xl rounded-xl overflow-hidden relative border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33727.70452136164!2d-77.94807785!3d34.2257284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9808e74e6a9b3%3A0x85beca85f3afec11!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Service Area Map"
                    ></iframe>
                     {/* Floating Info Box */}
                     <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 md:p-6 shadow-xl rounded max-w-xs md:max-w-sm border-l-4 border-red-700">
                        <h4 className="font-bold font-heading text-lg mb-2 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-red-700" />
                            Tri-State Service Area
                        </h4>
                        <p className="text-sm text-stone-600 font-medium">Based in Wilmington, NC.</p>
                        <p className="text-sm text-stone-600">Proudly serving North Carolina, South Carolina, and Virginia.</p>
                    </div>
                 </div>
             </div>
          </div>
      </section>

      {/* CONVERSION PANEL */}
      <section className="bg-red-700 py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Your Floors Deserve Big Tony Quality.</h2>
        <p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">Don't settle for cheap installs that peel up in a year. Get it done right the first time.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/contact">
                <Button size="xl" variant="secondary">Get My Free Quote</Button>
            </Link>
            <a href={`tel:${PHONE_NUMBER}`}>
                <Button size="xl" variant="accent">Call {PHONE_NUMBER}</Button>
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;