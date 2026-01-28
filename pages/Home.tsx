import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, BadgeDollarSign, MapPin, ArrowRight, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Calculator from '../components/Calculator';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER, GALLERY_IMAGES, BRAND_NAME } from '../constants';

const Home: React.FC = () => {
  const heroImages = [
    GALLERY_IMAGES[8].image,
    GALLERY_IMAGES[2].image,
    GALLERY_IMAGES[4].image,
    GALLERY_IMAGES[0].image,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[900px] lg:h-[95vh] flex items-center bg-stone-950 overflow-hidden">
        {/* Animated Background Slider */}
        <div className="absolute inset-0 z-0">
            {heroImages.map((img, index) => (
                <img 
                    key={img}
                    src={img} 
                    alt={`Flooring Excellence ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                        index === currentImageIndex ? 'opacity-30' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-stone-950/80 lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Centered Flex Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-20 py-12 lg:py-0 max-w-7xl mx-auto">
            
            {/* Column: Copy - Now on the LEFT for desktop */}
            <div className="w-full lg:w-[500px] xl:w-[600px] text-center lg:text-left flex flex-col items-center lg:items-start order-1">
                <div className="inline-flex items-center space-x-2 bg-[#014E86] text-white px-4 py-2 rounded-sm mb-8 text-xs font-bold uppercase tracking-[0.3em] shadow-xl">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>Wilmington's Elite Installers</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-heading font-black leading-[0.8] mb-8 text-white uppercase tracking-tighter italic">
                  Floors <br/>
                  <span className="text-[#014E86] not-italic">Done</span> <br/>
                  Right.
                </h1>
                
                <p className="text-xl md:text-2xl text-stone-300 mb-10 leading-tight font-light">
                  <span className="text-white font-bold">{BRAND_NAME}</span> delivers master-level installation, veteran craftsmanship, and honesty you can trust.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                  <Link to="/wilmington-flooring-services" className="w-full sm:w-auto">
                    <Button size="xl" className="w-full sm:w-auto shadow-2xl bg-[#014E86] hover:bg-[#003d6a] px-12">See Our Work</Button>
                  </Link>
                  <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-stone-950 backdrop-blur-sm transition-all px-12">
                        {PHONE_NUMBER}
                    </Button>
                  </a>
                </div>

                <div className="mt-16 flex items-center space-x-8 opacity-80">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex text-amber-400 mb-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">150+ Verified 5-Star Reviews</span>
                    </div>
                    <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                    <div className="hidden md:flex flex-col">
                        <span className="text-white font-bold text-lg uppercase tracking-tight">Fully Insured</span>
                        <span className="text-[10px] font-black text-[#014E86] uppercase tracking-[0.2em]">Safety & Quality Assured</span>
                    </div>
                </div>
            </div>

            {/* Column: Calculator Card - Now on the RIGHT for desktop */}
            <div className="w-full lg:w-[450px] shrink-0 order-2">
              <div className="bg-white rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden border border-white/10">
                <div className="bg-stone-50 border-b border-stone-100 p-8">
                    <h2 className="text-3xl font-heading font-black text-stone-900 uppercase tracking-tight italic">Quote Calculator</h2>
                    <p className="text-stone-500 text-[10px] font-black uppercase tracking-widest mt-1">Get an instant estimate for your project</p>
                </div>
                <div className="w-full min-h-[500px] relative bg-white">
                    <Calculator />
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#014E86]/5 skew-x-12 transform -translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* QUICK TRUST BAR */}
      <section className="bg-white py-12 border-b border-stone-200 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-10 h-10 text-[#014E86] mb-3" />
                  <h3 className="font-bold font-heading text-lg uppercase">Licensed & Insured</h3>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-widest">Peace of Mind</p>
              </div>
              <div className="flex flex-col items-center text-center">
                  <Star className="w-10 h-10 text-[#014E86] mb-3" />
                  <h3 className="font-bold font-heading text-lg uppercase">Owner Operated</h3>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-widest">Hands-on Quality</p>
              </div>
              <div className="flex flex-col items-center text-center">
                  <BadgeDollarSign className="w-10 h-10 text-[#014E86] mb-3" />
                  <h3 className="font-bold font-heading text-lg uppercase">Fair Pricing</h3>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-widest">No Hidden Fees</p>
              </div>
               <div className="flex flex-col items-center text-center">
                  <Clock className="w-10 h-10 text-[#014E86] mb-3" />
                  <h3 className="font-bold font-heading text-lg uppercase">Fast Timelines</h3>
                  <p className="text-[10px] text-stone-400 uppercase font-black tracking-widest">In & Out Service</p>
              </div>
          </div>
        </div>
      </section>

      {/* INSTALL EXPERTS */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-heading font-black text-stone-900 mb-4 uppercase tracking-tighter italic">Install Experts</h2>
                <div className="w-32 h-3 bg-[#014E86] mx-auto mb-6"></div>
                <p className="text-stone-500 max-w-xl mx-auto text-lg font-medium uppercase tracking-tight">High-end craftsmanship. No shortcuts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white p-12 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-b-[10px] border-transparent hover:border-[#014E86] group cursor-pointer flex flex-col">
                        <service.icon className="w-12 h-12 text-stone-200 group-hover:text-[#014E86] mb-8 transition-colors" />
                        <h3 className="font-black font-heading text-4xl mb-4 uppercase tracking-tighter italic">{service.title}</h3>
                        <p className="text-stone-500 mb-8 leading-tight flex-grow text-lg font-medium">{service.shortDesc}</p>
                        <Link to="/wilmington-flooring-services" className="text-[#014E86] font-black text-sm tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform uppercase">
                            View Specs <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-heading font-black text-stone-900 mb-4 uppercase italic">Built on Trust.</h2>
                <p className="text-[#014E86] text-sm uppercase tracking-[0.3em] font-black">Local Feedback from Wilmington homeowners</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-stone-50 p-12 rounded-sm shadow-2xl border-t-8 border-[#014E86] flex flex-col h-full hover:-translate-y-2 transition-transform">
                        <div className="flex text-amber-400 mb-8">
                            {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                        <p className="text-stone-900 italic mb-12 flex-grow text-2xl leading-tight font-black tracking-tight">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-[#014E86] rounded-full flex items-center justify-center text-white font-black text-2xl mr-4">
                              {t.name.charAt(0)}
                            </div>
                            <div>
                              <span className="block font-black text-stone-900 text-xl font-heading uppercase">{t.name}</span>
                              <span className="text-[#014E86] font-black text-[10px] uppercase tracking-[0.2em]">{t.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* MAP / SERVICE AREA */}
      <section className="bg-stone-900 py-24">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 uppercase italic leading-[0.9]">The <br/><span className="text-[#014E86]">Tri-State</span> <br/>Professionals.</h2>
                    <p className="text-xl text-stone-400 mb-10 leading-relaxed font-light">Based in <span className="text-white font-bold">Wilmington, NC</span>. We cover NC, SC, and Virginia for high-impact residential and commercial flooring projects.</p>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-6 bg-stone-800/50 p-8 border border-white/5">
                            <MapPin className="w-10 h-10 text-[#014E86]" />
                            <div>
                                <h4 className="text-white font-black text-2xl uppercase italic">Service HQ</h4>
                                <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Wilmington, NC 28403</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[600px] shadow-2xl overflow-hidden grayscale contrast-150 hover:grayscale-0 transition-all duration-1000 border-[12px] border-stone-800">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33727.70452136164!2d-77.94807785!3d34.2257284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9808e74e6a9b3%3A0x85beca85f3afec11!2sWilmington%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Service Area Map"
                    ></iframe>
                </div>
             </div>
          </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#014E86] py-32 text-center px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-7xl md:text-[10vw] font-heading font-black text-white mb-12 drop-shadow-2xl uppercase tracking-tighter leading-none italic">Let's Lay <br/> Some Floor.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Link to="/contact-for-free-flooring-estimate">
                  <Button size="xl" variant="secondary" className="px-16 py-8 text-2xl font-black bg-white text-[#014E86] hover:bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">Get My Quote</Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`}>
                  <Button size="xl" className="px-16 py-8 text-2xl font-black bg-stone-900 text-white hover:bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)]">Call {PHONE_NUMBER}</Button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;