import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, BadgeDollarSign, MapPin, ArrowRight, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER, GALLERY_IMAGES, BRAND_NAME } from '../constants';

const Home: React.FC = () => {
  // Select high-impact images for the background transition
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
      
      {/* HERO SECTION - Refined for High-End Desktop Aesthetics */}
      <section className="relative min-h-[850px] lg:h-[90vh] flex items-center bg-stone-950 overflow-hidden">
        {/* Animated Background Slider */}
        <div className="absolute inset-0 z-0">
            {heroImages.map((img, index) => (
                <img 
                    key={img}
                    src={img} 
                    alt={`Flooring Excellence ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                        index === currentImageIndex ? 'opacity-40' : 'opacity-0'
                    }`}
                />
            ))}
            {/* Sophisticated Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-stone-950/70 lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 h-full py-12 lg:py-0">
            
            {/* Left Side: Bold Brand Messaging */}
            <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center space-x-2 bg-[#014E86] text-white px-4 py-1.5 rounded-sm mb-8 text-xs font-bold uppercase tracking-[0.25em] shadow-lg">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>Wilmington's Premier Installers</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black leading-[0.85] mb-8 text-white uppercase tracking-tighter italic">
                  Floors <br/>
                  <span className="text-[#014E86] not-italic">Installed</span> <br/>
                  Right.
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-stone-300 mb-10 max-w-2xl leading-relaxed font-light">
                  <span className="text-white font-medium">{BRAND_NAME}</span> delivers master-level craftsmanship, rapid project turnarounds, and transparent pricing that respects your budget.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Link to="/wilmington-flooring-services" className="w-full sm:w-auto">
                    <Button size="xl" className="w-full sm:w-auto shadow-2xl">View Our Services</Button>
                  </Link>
                  <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto">
                    <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-stone-950 backdrop-blur-md transition-all">
                        {PHONE_NUMBER}
                    </Button>
                  </a>
                </div>

                <div className="mt-12 flex items-center space-x-6">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#014E86] bg-stone-800 flex items-center justify-center overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Customer" className="w-full h-full object-cover opacity-80" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">150+ Verified 5-Star Reviews</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Professional Integrated Lead Card */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="bg-white rounded-2xl shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6)] overflow-hidden border border-white/20 transform lg:rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="bg-stone-50 border-b border-stone-100 p-6">
                    <h2 className="text-2xl font-heading font-bold text-stone-900 uppercase tracking-tight">Get Your Free Quote</h2>
                    <p className="text-stone-500 text-sm mt-1">Locked in pricing, zero hidden fees.</p>
                </div>
                <div className="w-full h-[640px] relative bg-white">
                    {/* Clean iframe implementation without awkward scaling */}
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/uW5o4MLb4KvadHnnyfuU"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            border: 'none',
                        }}
                        id="inline-uW5o4MLb4KvadHnnyfuU" 
                        data-layout="{'id':'INLINE'}"
                        title="Contact Form"
                    ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BOOSTERS - Integrated tighter for visual flow */}
      <section className="bg-white py-12 border-b border-stone-200 shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center space-x-4">
                  <div className="bg-[#014E86]/5 p-3 rounded-lg"><ShieldCheck className="w-8 h-8 text-[#014E86]" /></div>
                  <div>
                      <h3 className="font-bold font-heading text-lg uppercase tracking-tight">Fully Insured</h3>
                      <p className="text-[10px] text-stone-500 uppercase font-black">Licensed Professionals</p>
                  </div>
              </div>
              <div className="flex items-center space-x-4">
                  <div className="bg-[#014E86]/5 p-3 rounded-lg"><Star className="w-8 h-8 text-[#014E86]" /></div>
                  <div>
                      <h3 className="font-bold font-heading text-lg uppercase tracking-tight">Owner-Operated</h3>
                      <p className="text-[10px] text-stone-500 uppercase font-black">Guaranteed Quality</p>
                  </div>
              </div>
              <div className="flex items-center space-x-4">
                  <div className="bg-[#014E86]/5 p-3 rounded-lg"><BadgeDollarSign className="w-8 h-8 text-[#014E86]" /></div>
                  <div>
                      <h3 className="font-bold font-heading text-lg uppercase tracking-tight">Fixed Pricing</h3>
                      <p className="text-[10px] text-stone-500 uppercase font-black">No Hidden Surprises</p>
                  </div>
              </div>
               <div className="flex items-center space-x-4">
                  <div className="bg-[#014E86]/5 p-3 rounded-lg"><Clock className="w-8 h-8 text-[#014E86]" /></div>
                  <div>
                      <h3 className="font-bold font-heading text-lg uppercase tracking-tight">Fast Timeline</h3>
                      <p className="text-[10px] text-stone-500 uppercase font-black">Rapid Completion</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-stone-900 mb-4 uppercase tracking-tighter italic">Expert Installations</h2>
                <div className="w-32 h-2 bg-[#014E86] mx-auto mb-6"></div>
                <p className="text-stone-600 max-w-xl mx-auto">From high-end real wood to bomb-proof vinyl plank, we handle the materials you love with the respect they deserve.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-8 border-transparent hover:border-[#014E86] group cursor-pointer flex flex-col">
                        <service.icon className="w-16 h-16 text-stone-200 group-hover:text-[#014E86] mb-8 transition-colors" />
                        <h3 className="font-bold font-heading text-3xl mb-4 uppercase tracking-tighter">{service.title}</h3>
                        <p className="text-stone-500 mb-8 leading-relaxed flex-grow text-lg">{service.shortDesc}</p>
                        <Link to="/wilmington-flooring-services" className="text-[#014E86] font-bold text-sm tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                            SEE DETAILS <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-stone-900 mb-4">Real Customers. Real Trust.</h2>
                <p className="text-stone-500 text-lg uppercase tracking-widest font-bold">5-Star Feedback from local Wilmington families</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-stone-50 p-12 rounded-2xl shadow-xl border-l-8 border-[#014E86] flex flex-col h-full hover:-translate-y-2 transition-transform">
                        <div className="flex text-amber-400 mb-8">
                            {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                        <p className="text-stone-800 italic mb-12 flex-grow text-xl leading-relaxed font-medium">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-[#014E86] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                              {t.name.charAt(0)}
                            </div>
                            <div>
                              <span className="block font-bold text-stone-900 text-xl font-heading">{t.name}</span>
                              <span className="text-[#014E86] font-bold text-xs uppercase tracking-widest">{t.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SERVICE AREA MAP SECTION */}
      <section className="bg-stone-900 py-24">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 uppercase italic leading-tight">Serving the <br/><span className="text-[#014E86]">Tri-State Area.</span></h2>
                    <p className="text-xl text-stone-400 mb-10 leading-relaxed">Based in Wilmington, NC, we travel across North Carolina, South Carolina, and Virginia for high-quality residential and commercial projects.</p>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-6 bg-stone-800/50 p-6 rounded-xl border border-white/5">
                            <MapPin className="w-10 h-10 text-[#014E86]" />
                            <div>
                                <h4 className="text-white font-bold text-xl uppercase">Headquarters</h4>
                                <p className="text-stone-500">Wilmington, NC 28403</p>
                            </div>
                        </div>
                         <div className="flex items-center space-x-6 bg-stone-800/50 p-6 rounded-xl border border-white/5">
                            <Phone className="w-10 h-10 text-[#014E86]" />
                            <div>
                                <h4 className="text-white font-bold text-xl uppercase">Call for Quote</h4>
                                <p className="text-stone-500">{PHONE_NUMBER}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] shadow-2xl rounded-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border-8 border-stone-800">
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

      {/* FINAL CONVERSION PANEL */}
      <section className="bg-[#014E86] py-32 text-center px-4 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'}}></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-10 drop-shadow-2xl uppercase tracking-tighter leading-none italic">Quality is Never <br/> an Accident.</h2>
          <p className="text-blue-100 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">Upgrade your home with floors that stand the test of time. Professional install. Zero Stress.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
               <Link to="/contact-for-free-flooring-estimate">
                  <Button size="xl" variant="secondary" className="px-16 py-7 text-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105">Get Free Quote</Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`}>
                  <Button size="xl" variant="accent" className="px-16 py-7 text-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] bg-stone-900 border border-white/10 hover:scale-105">Call Today</Button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;