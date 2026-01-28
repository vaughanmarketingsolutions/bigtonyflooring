import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
       <div className="bg-stone-900 text-white py-16 text-center">
            <h1 className="text-5xl font-heading font-bold mb-2">Our Work</h1>
            <p className="text-stone-400">High-quality craftsmanship in every detail.</p>
       </div>

       <div className="container mx-auto px-4 py-12">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {GALLERY_IMAGES.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer bg-stone-200 border-4 border-white"
                        onClick={() => setSelectedImage(item.image)}
                    >
                        <img 
                            src={item.image} 
                            alt={item.label} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-[#014E86] p-4 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform">
                                <ZoomIn className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>

       {/* Lightbox */}
       {selectedImage && (
           <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
               <button className="absolute top-8 right-8 text-white hover:text-[#014E86] transition-colors">
                   <X className="w-10 h-10" />
               </button>
               <div className="relative max-w-5xl w-full flex items-center justify-center">
                  <img 
                    src={selectedImage} 
                    alt="Enlarged view" 
                    className="max-w-full max-h-[90vh] rounded shadow-2xl border-4 border-stone-800"
                    onClick={(e) => e.stopPropagation()} 
                  />
               </div>
           </div>
       )}
    </div>
  );
};

export default Gallery;