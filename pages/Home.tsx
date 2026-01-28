import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Clock, BadgeDollarSign, MapPin, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER, GALLERY_IMAGES, BRAND_NAME } from '../constants';

const Home: React.FC = () => {
  // Reorder images to start with a high-impact shot (Image 9)
  const heroImages = [
    GALLERY_IMAGES[8].image,
    GALLERY_IMAGES[0].image,
    GALLERY_IMAGES[2].image,
    GALLERY_IMAGES[4].image,
    GALLERY_IMAGES[6].image,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION - Tighter padding, high impact */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-12 pb-16 lg:pt-0 lg:pb-0">
        {/* Animated Background Slider */}
        <div className="absolute inset-0">
            {heroImages.map((img, index) => (
                <img 
                    key={img}
                    src={img} 
                    alt={`Flooring Excellence ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-70' : 'opacity-0'
                    }`}
                />
            ))}
            {/* Rich gradient for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent hidden lg:block"></div>
            <div className="absolute inset-0 bg-black/60 lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="text-white lg:col-span-7 xl:col-span-7 order-1 flex flex-col justify-center">
                <div className="inline-block self-start bg-[#014E86] px-4 py-1.5 mb-5 text-sm font-bold uppercase tracking-widest transform -skew-x-12 shadow-lg">
                    <span className="skew-x-12 block">Wilmington's Premier Installers</span>
                </div>
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-heading font-bold leading-[0.85] mb-5 drop-shadow-2xl">
                  Floors Installed <br/>
                  <span className="text-[#014E86]">Right.</span>
                </h1>
                <p className="text-xl md:text-2xl xl:text-2xl text-stone-100 mb-7 max-w-xl leading-relaxed font-medium drop-shadow-md">
                  {BRAND_NAME} brings craftsmanship, speed, and honest pricing to every job. No hidden fees. No nonsense. Just damn good floors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact">
                    <Button size="lg" className="px-10 py-4 text-base">View All Services</Button>
                  </Link>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-stone-900 px-10 py-4 text-base bg-black/20 backdrop-blur-sm">
                        Call Now
                    </Button>
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-white/90 text-sm font-bold uppercase tracking-widest drop-shadow">
                    <div className="flex space-x-1 mr-3">
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                      <Star className="w-5 h-5 text-amber-400 fill-current" />
                    </div>
                    <span className="text-sm">5.0 Rated local expert</span>
                </div>
            </div>

            {/* Right Column: Lead Form (Slightly smaller, cleaner fit) */}
            <div className="lg:col-span-5 xl:col-span-5 order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden h-[730px] transition-all duration-300 border border-stone-200">
                <div className="w-full h-full relative overflow-hidden">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/uW5o4MLb4KvadHnnyfuU"
                        style={{ 
                            width: '107.5%', 
                            height: '107.5%', 
                            border: 'none',
                            transform: 'scale(0.93)',
                            transformOrigin: 'top left',
                            position: 'absolute',
                            top: 0,
                            left: 0
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
                        data-height="730"
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

      {/* TRUST BOOSTERS - Overlap hero slightly */}
      <section className="bg-white py-12 border-b border-stone-200 -mt-16 relative z-20 container mx-auto rounded-lg shadow-2xl hidden lg:block">
        <div className="grid grid-cols-4 gap-8 px-12">
            <div className="flex items-center space-x-5">
                <div className="bg-stone-100 p-4 rounded-full"><ShieldCheck className="w-8 h-8 text-[#014E86]" /></div>
                <div><h3 className="font-bold font-heading text-lg">Licensed & Insured</h3><p className="text-sm text-stone-500">Fully protected.</p></div>
            </div>
            <div className="flex items-center space-x-5">
                <div className="bg-stone-100 p-4 rounded-full"><Star className="w-8 h-8 text-[#014E86]" /></div>
                <div><h3 className="font-bold font-heading text-lg">Local Experts</h3><p className="text-sm text-stone-500">Years of trust.</p></div>
            </div>
            <div className="flex items-center space-x-5">
                <div className="bg-stone-100 p-4 rounded-full"><BadgeDollarSign className="w-8 h-8 text-[#014E86]" /></div>
                <div><h3 className="font-bold font-heading text-lg">Transparent Pricing</h3><p className="text-sm text-stone-500">No surprise bills.</p></div>
            </div>
             <div className="flex items-center space-x-5">
                <div className="bg-stone-100 p-4 rounded-full"><Clock className="w-8 h-8 text-[#014E86]" /></div>
                <div><h3 className="font-bold font-heading text-lg">Fast Turnaround</h3><p className="text-sm text-stone-500">Done in days, not weeks.</p></div>
            </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-stone-900 mb-4 uppercase tracking-tighter">Professional Services</h2>
                <div className="w-24 h-2 bg-[#014E86] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service) => (
                    <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-transparent hover:border-[#014E86] group cursor-pointer flex flex-col">
                        <service.icon className="w-14 h-14 text-stone-300 group-hover:text-[#014E86] mb-6 transition-colors" />
                        <h3 className="font-bold font-heading text-2xl mb-3">{service.title}</h3>
                        <p className="text-stone-500 mb-6 leading-relaxed flex-grow">{service.shortDesc}</p>
                        <Link to="/services" className="text-[#014E86] font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                            VIEW DETAILS <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-stone-900 mb-4">What Our Clients Say</h2>
                <div className="w-24 h-2 bg-[#014E86] mx-auto mb-8"></div>
                <p className="text-stone-600 max-w-2xl mx-auto text-lg">We take pride in our reputation. Here is what local homeowners in Wilmington and beyond have to say about working with {BRAND_NAME}.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-stone-50 p-10 rounded-xl shadow-lg border-t-8 border-[#014E86] flex flex-col h-full hover:scale-[1.02] transition-transform">
                        <div className="flex text-amber-400 mb-6">
                            {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                        <p className="text-stone-700 italic mb-10 flex-grow text-lg leading-relaxed">"{t.text}"</p>
                        <div className="pt-8 border-t border-stone-200 flex items-center">
                            <div className="w-12 h-12 bg-[#014E86] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 uppercase">
                              {t.name.charAt(0)}
                            </div>
                            <div>
                              <span className="block font-bold text-stone-900 text-xl">{t.name}</span>
                              <span className="text-[#014E86] font-bold text-xs uppercase tracking-tighter">{t.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SERVICE AREA MAP */}
      <section className="bg-stone-100 relative py-12 md:py-24">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                 {/* Map Container */}
                 <div className="w-full max-w-5xl h-[500px] shadow-2xl rounded-2xl overflow-hidden relative border-8 border-white">
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
                     <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl rounded-xl max-w-xs md:max-w-md border-l-8 border-[#014E86]">
                        <h4 className="font-bold font-heading text-2xl mb-3 flex items-center text-stone-900">
                            <MapPin className="w-6 h-6 mr-3 text-[#014E86]" />
                            Where We Work
                        </h4>
                        <p className="text-lg text-stone-700 font-bold mb-2">Based in Wilmington, NC.</p>
                        <p className="text-stone-600">Proudly serving the entire region, including North Carolina, South Carolina, and Virginia.</p>
                    </div>
                 </div>
             </div>
          </div>
      </section>

      {/* CONVERSION PANEL */}
      <section className="bg-[#014E86] py-28 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 drop-shadow-xl uppercase tracking-tighter leading-tight">Your Floors Deserve <br/> the {BRAND_NAME} Touch.</h2>
          <p className="text-blue-100 text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">Don't settle for cheap installs that peel up in a year. Get it done right the first time.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Link to="/contact">
                  <Button size="xl" variant="secondary" className="px-12 py-6 text-xl shadow-2xl">Get My Free Quote</Button>
              </Link>
              <a href={`tel:${PHONE_NUMBER}`}>
                  <Button size="xl" variant="accent" className="px-12 py-6 text-xl shadow-2xl bg-stone-900 border border-white/20">Call {PHONE_NUMBER}</Button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;