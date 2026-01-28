import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 shadow-2xl rounded-lg overflow-hidden border-4 border-white">
      <div 
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[500px] cursor-col-resize select-none group"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onMouseUp={onMouseUp}
      >
        {/* Background Image (After) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://picsum.photos/id/129/1000/800')` }}
        >
            <div className="absolute top-4 right-4 bg-stone-900/80 text-white px-3 py-1 text-sm font-bold uppercase rounded">
                After
            </div>
        </div>

        {/* Foreground Image (Before) - Clipped */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden border-r-2 border-white"
          style={{ 
            backgroundImage: `url('https://picsum.photos/id/345/1000/800')`,
            width: `${sliderPosition}%`,
            filter: 'grayscale(60%) sepia(20%)'
          }}
        >
             <div className="absolute top-4 left-4 bg-[#014E86]/80 text-white px-3 py-1 text-sm font-bold uppercase rounded">
                Before
            </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-[#014E86] rounded-full flex items-center justify-center shadow-lg border-2 border-white -ml-[18px]">
            <MoveHorizontal className="text-white w-6 h-6" />
          </div>
        </div>
        
        {/* Instruction overlay (fades out on interact) */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-xs font-bold transition-opacity duration-300 pointer-events-none ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
            Drag to compare
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;