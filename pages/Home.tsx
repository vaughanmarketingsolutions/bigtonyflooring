import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, BadgeDollarSign, MapPin, ArrowRight, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
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
      
      {/* HERO SECTION - Optimized for mobile height and responsiveness */}
      <section className="relative min-h-screen lg:h-screen flex items-center bg-black py-12 lg:py-0">
        <div className="absolute inset-0">
            {heroImages.map((img, index) => (
                <img 
                    key={img}
                    src={img} 
                    alt={`Flooring Excellence ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
                        index === currentImageIndex ? 'opacity-60' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-black/60 lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            
            {/* Left Column: High-Impact Text Content */}
            <div className="text-white lg:col-span-7 xl:col-span-8 order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-block bg-[#014E86] px-4 py-1.5 mb-6 text-xs md:text-sm font-bold uppercase tracking-[0.15em] transform -skew-x-12 shadow-2xl">
                    <span className="skew-x-12 block">Wilmington's Finest Craftsmanship</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-heading font-bold leading-[0.9] mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] uppercase">
                  Floors <br/>
                  <span className="text-[#014E86]">Installed</span> <br/>
                  Right.
                </h1>
                <p className="text-lg md:text-2xl xl:text-3xl text-stone-100 mb-8 max-w-xl leading-relaxed font-light drop-shadow-lg">
                  {BRAND_NAME} brings elite skill, rapid turnaround, and crystal-clear pricing to every Wilmington home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
                  <Link to="/wilmington-flooring-services" className="w-full">
                    <Button size="lg" className="w-full px-10 py-4 shadow-2xl lg:size-xl">Browse Services</Button>
                  </Link>
                  <a href={`tel:${PHONE_NUMBER}`} className="w-full">
                    <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-stone-900 px-10 py-4 bg-black/30 backdrop-blur-md transition-all lg:size-xl">
                        Call {PHONE_NUMBER}
                    </Button>
                  </a>
                </div>
                <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <div className="flex space-x-0.5">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90">5.0 Star Professional</span>
                </div>
            </div>

            {/* Right Column: Lead Form - Adjusted for mobile visibility */}
            <div className="lg:col-span-5 xl:col-span-4 order-2 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-[400px] bg-white rounded-xl shadow-2xl overflow-hidden h-[600px] lg:h-[700px] border border-white/20 transition-transform duration-500 hover:scale-[1.01]">
                <div className="w-full h-full relative">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/uW5o4MLb4KvadHnnyfuU"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            border: 'none',
                            borderRadius: '3px'
                        }}
                        id="inline-uW5o4MLb4KvadHnnyfuU" 
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Form 0"
                        data-height="670"
                        data-layout-iframe-id="inline-uW5o4MLb4KvadHnnyfuU"
                        data-form-id="uW5o4MLb4KvadHnnyfuU"
                        title="Form 0"
                    >
                    </iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BOOSTERS - Compact for mobile */}
      <section className="bg-white py-10 lg:py-14 border-y border-stone-200 shadow-inner relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              <div className="flex flex-col items-center text-center">
                  <div className="bg-[#014E86]/10 p-4 rounded-xl mb-3"><ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 text-[#014E86]" /></div>
                  <h3 className="font-bold font-heading text-sm lg:text-lg mb-1 uppercase tracking-tighter">Fully Insured</h3>
                  <p className="text-[10px] text-stone-500 uppercase font-bold hidden sm:block">Total Peace of Mind</p>
              </div>
              <div className="flex flex-col items-center text-center">
                  <div className="bg-[#014E86]/10 p-4 rounded-xl mb-3"><Star className="w-6 h-6 lg:w-8 lg:h-8 text-[#014E86]" /></div>
                  <h3 className="font-bold font-heading text-sm lg:text-lg mb-1 uppercase tracking-tighter">Owner Operated</h3>
                  <p className="text-[10px] text-stone-500 uppercase font-bold hidden sm:block">No Sub-Contractors</p>
              </div>
              <div className="flex flex-col items-center text-center">
                  <div className="bg-[#014E86]/10 p-4 rounded-xl mb-3"><BadgeDollarSign className="w-6 h-6 lg:w-8 lg:h-8 text-[#014E86]" /></div>
                  <h3 className="font-bold font-heading text-sm lg:text-lg mb-1 uppercase tracking-tighter">Upfront Quotes</h3>
                  <p className="text-[10px] text-stone-500 uppercase font-bold hidden sm:block">No Hidden Fees</p>
              </div>
               <div className="flex flex-col items-center text-center">
                  <div className="bg-[#014E86]/10 p-4 rounded-xl mb-3"><Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#014E86]" /></div>
                  <h3 className="font-bold font-heading text-sm lg:text-lg mb-1 uppercase tracking-tighter">Fast Installs</h3>
                  <p className="text-[10px] text-stone-500 uppercase font-bold hidden sm:block">Days, Not Weeks</p>
              </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP - Adjusted spacing for mobile */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-4xl lg:text-6xl font-heading font-bold text-stone-900 mb-4 uppercase tracking-tighter italic">Expert Installations</h2>
                <div className="w-24 lg:w-32 h-2 bg-[#014E86] mx-auto mb-6"></div>
                <p className="text-stone-600 max-w-xl mx-auto text-sm lg:text-base">From high-end real wood to bomb-proof vinyl plank, we handle the materials you love with the respect they deserve.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-8 border-transparent hover:border-[#014E86] group cursor-pointer flex flex-col">
                        <service.icon className="w-12 h-12 lg:w-16 lg:h-16 text-stone-200 group-hover:text-[#014E86] mb-6 lg:mb-8 transition-colors" />
                        <h3 className="font-bold font-heading text-2xl lg:text-3xl mb-3 uppercase tracking-tighter">{service.title}</h3>
                        <p className="text-stone-500 mb-6 leading-relaxed flex-grow text-sm lg:text-lg">{service.shortDesc}</p>
                        <Link to="/wilmington-flooring-services" className="text-[#014E86] font-bold text-xs lg:text-sm tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                            SEE DETAILS <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-stone-900 mb-4">Real Customers. Real Trust.</h2>
                <p className="text-stone-500 text-xs lg:text-lg uppercase tracking-widest font-bold">5-Star Feedback from local Wilmington families</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-stone-50 p-8 lg:p-12 rounded-2xl shadow-xl border-l-8 border-[#014E86] flex flex-col h-full hover:-translate-y-2 transition-transform">
                        <div className="flex text-amber-400 mb-6 lg:mb-8">
                            {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />)}
                        </div>
                        <p className="text-stone-800 italic mb-8 lg:mb-12 flex-grow text-base lg:text-xl leading-relaxed font-medium">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-[#014E86] rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-2xl mr-4">
                              {t.name.charAt(0)}
                            </div>
                            <div>
                              <span className="block font-bold text-stone-900 text-base lg:text-xl font-heading">{t.name}</span>
                              <span className="text-[#014E86] font-bold text-[10px] uppercase tracking-widest">{t.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SERVICE AREA MAP SECTION */}
      <section className="bg-stone-900 py-16 lg:py-24">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 uppercase italic leading-tight">Serving the <br/><span className="text-[#014E86]">Tri-State Area.</span></h2>
                    <p className="text-lg lg:text-xl text-stone-400 mb-8 lg:mb-10 leading-relaxed">Based in Wilmington, NC, we travel across North Carolina, South Carolina, and Virginia for high-quality residential and commercial projects.</p>
                    <div className="space-y-4 lg:space-y-6 text-left">
                        <div className="flex items-center space-x-4 lg:space-x-6 bg-stone-800/50 p-4 lg:p-6 rounded-xl border border-white/5">
                            <MapPin className="w-6 h-6 lg:w-10 lg:h-10 text-[#014E86]" />
                            <div>
                                <h4 className="text-white font-bold text-base lg:text-xl uppercase">Headquarters</h4>
                                <p className="text-stone-500 text-sm">Wilmington, NC 28403</p>
                            </div>
                        </div>
                         <div className="flex items-center space-x-4 lg:space-x-6 bg-stone-800/50 p-4 lg:p-6 rounded-xl border border-white/5">
                            <Phone className="w-6 h-6 lg:w-10 lg:h-10 text-[#014E86]" />
                            <div>
                                <h4 className="text-white font-bold text-base lg:text-xl uppercase">Call for Quote</h4>
                                <p className="text-stone-500 text-sm">{PHONE_NUMBER}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[350px] lg:h-[500px] shadow-2xl rounded-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border-4 lg:border-8 border-stone-800">
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

      {/* FINAL CONVERSION PANEL - Optimized for mobile tap targets */}
      <section className="bg-[#014E86] py-20 lg:py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'}}></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl lg:text-8xl font-heading font-bold text-white mb-8 lg:mb-10 drop-shadow-2xl uppercase tracking-tighter leading-none italic">Quality is Never <br className="hidden lg:block" /> an Accident.</h2>
          <p className="text-blue-100 text-lg lg:text-2xl mb-12 lg:text-16 max-w-2xl mx-auto font-light leading-relaxed">Upgrade your home with floors that stand the test of time. Professional install. Zero Stress.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-10">
               <Link to="/contact-for-free-flooring-estimate" className="w-full sm:w-auto">
                  <Button size="xl" variant="secondary" className="w-full px-12 lg:px-16 py-6 lg:py-7 text-xl lg:text-2xl shadow-2xl hover:scale-105">Get Free Quote</Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto">
                  <Button size="xl" variant="accent" className="w-full px-12 lg:px-16 py-6 lg:py-7 text-xl lg:text-2xl shadow-2xl bg-stone-900 border border-white/10 hover:scale-105">Call Today</Button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;