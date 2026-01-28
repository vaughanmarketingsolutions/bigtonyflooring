import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { PHONE_NUMBER } from '../constants';
import { Phone, Calculator as CalcIcon, AlertCircle } from 'lucide-react';

const Calculator: React.FC = () => {
  const [sqFt, setSqFt] = useState<number | ''>('');
  const [material, setMaterial] = useState('lvp');
  const [wantDemo, setWantDemo] = useState(false);
  const [quote, setQuote] = useState<number | null>(null);

  const rates: Record<string, number> = {
    hardwood: 4,
    lvp: 2,
    lvt: 3,
    tile: 10,
  };

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sqFt || typeof sqFt !== 'number' || sqFt <= 0) return;
    
    const materialRate = rates[material];
    const demoRate = wantDemo ? 1 : 0;
    const totalRate = materialRate + demoRate;
    const total = sqFt * totalRate;
    
    setQuote(total);
  };

  return (
    <div className="bg-white p-6 md:p-8 h-full flex flex-col">
      {!quote ? (
        <form onSubmit={calculate} className="space-y-6 flex-grow flex flex-col justify-center">
          <div className="space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">INSTALL LABOR ONLY</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Space Size (Sq. Ft.)</label>
              <input 
                type="number" 
                required
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-full p-4 border-2 border-stone-100 rounded-sm focus:border-[#014E86] focus:outline-none bg-stone-50 text-xl font-bold font-heading"
                placeholder="e.g. 500"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Select Material (Install Rate)</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(rates).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMaterial(m)}
                    className={`p-3 text-sm font-bold uppercase tracking-tighter border-2 transition-all flex flex-col items-center ${
                      material === m 
                        ? 'border-[#014E86] bg-[#014E86] text-white' 
                        : 'border-stone-100 bg-stone-50 text-stone-500 hover:border-stone-200'
                    }`}
                  >
                    <span>{m}</span>
                    <span className={`text-[9px] opacity-70 ${material === m ? 'text-white' : 'text-stone-400'}`}>${rates[m]}/sqft Install</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-stone-50 border-2 border-dashed border-stone-200 cursor-pointer select-none hover:bg-stone-100 transition-colors" onClick={() => setWantDemo(!wantDemo)}>
              <input 
                type="checkbox" 
                checked={wantDemo}
                onChange={() => setWantDemo(!wantDemo)}
                className="w-5 h-5 accent-[#014E86]"
              />
              <span className="text-sm font-black uppercase tracking-tight text-stone-700">Add Demo Labor (+$1/sqft)</span>
            </div>

            <p className="text-[10px] text-stone-400 italic font-bold text-center uppercase tracking-tight">
              * Note: Quote excludes all material costs.
            </p>
          </div>

          <Button type="submit" fullWidth size="xl" className="mt-4 bg-[#014E86] shadow-xl">
            Calculate Install Quote
          </Button>
        </form>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-6">
            <CalcIcon className="w-10 h-10 text-[#014E86]" />
          </div>
          <p className="text-xs font-black text-stone-400 uppercase tracking-[0.3em] mb-2">Estimated Install Labor</p>
          <p className="text-7xl md:text-8xl font-heading font-black text-[#014E86] italic tracking-tighter mb-4">
            ${quote.toLocaleString()}
          </p>
          <div className="w-20 h-2 bg-[#014E86] mb-8"></div>
          
          <div className="bg-stone-900 text-white px-4 py-3 rounded-sm mb-8 flex items-center gap-3">
             <AlertCircle className="w-5 h-5 text-[#014E86] shrink-0" />
             <p className="text-[11px] font-black uppercase tracking-widest text-left leading-tight">
               Material Cost Not Included. <br/>
               <span className="text-stone-400">This quote is for professional installation only.</span>
             </p>
          </div>

          <div className="w-full space-y-4">
            <a href={`tel:${PHONE_NUMBER}`} className="block w-full">
              <Button fullWidth size="xl" className="bg-stone-900 hover:bg-black group shadow-2xl">
                <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Call {PHONE_NUMBER}
              </Button>
            </a>
            <button 
              onClick={() => setQuote(null)}
              className="text-xs font-black uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
            >
              Back to Calculator
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;