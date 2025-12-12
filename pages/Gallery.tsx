import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-stone-50">
       <div className="bg-stone-900 text-white py-16 text-center">
            <h1 className="text-5xl font-heading font-bold mb-2">Our Work</h1>
            <p className="text-stone-400">Real homes. Real results.</p>
       </div>

       <div className="container mx-auto px-4 py-12">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                            filter === cat 
                            ? 'bg-red-700 text-white' 
                            : 'bg-white text-stone-600 hover:bg-stone-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredImages.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer bg-stone-200"
                        onClick={() => setSelectedImage(item.image)}
                    >
                        <img 
                            src={item.image} 
                            alt={item.label} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-red-400 font-bold text-xs uppercase mb-1">{item.category}</span>
                            <span className="text-white font-heading font-bold text-xl">{item.label}</span>
                            <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                <ZoomIn className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>

       {/* Lightbox */}
       {selectedImage && (
           <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
               <button className="absolute top-8 right-8 text-white hover:text-red-500">
                   <X className="w-10 h-10" />
               </button>
               <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
               />
           </div>
       )}
    </div>
  );
};

export default Gallery;