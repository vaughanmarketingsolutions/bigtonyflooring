import React, { useState } from 'react';
import Button from './ui/Button';

const Calculator: React.FC = () => {
  const [sqFt, setSqFt] = useState<number | ''>('');
  const [type, setType] = useState('lvp');
  const [estimate, setEstimate] = useState<string | null>(null);

  const calculate = () => {
    if (!sqFt || typeof sqFt !== 'number') return;
    
    // Rough estimates per sqft including install
    const rates: Record<string, number> = {
      lvp: 7,
      lvt: 8,
      hardwood: 14,
      tile: 18,
    };

    const cost = sqFt * rates[type];
    setEstimate(cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border-t-8 border-red-700">
      <h3 className="text-2xl font-heading font-bold mb-4 text-stone-900">Quick Quote Calculator</h3>
      <p className="text-stone-600 mb-6 text-sm">Get a rough idea of your project cost. For an exact price, call Tony!</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">Room Size (Sq. Ft.)</label>
          <input 
            type="number" 
            value={sqFt}
            onChange={(e) => setSqFt(Number(e.target.value))}
            className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
            placeholder="e.g. 200"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">Flooring Type</label>
          <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
          >
            <option value="lvp">LVP (Vinyl Plank)</option>
            <option value="lvt">LVT (Vinyl Tile)</option>
            <option value="hardwood">Solid Hardwood</option>
            <option value="tile">Tile / Stone</option>
          </select>
        </div>

        <Button onClick={calculate} fullWidth>
          Calculate Range
        </Button>

        {estimate && (
          <div className="mt-4 p-4 bg-stone-100 rounded text-center animate-in fade-in slide-in-from-bottom-2">
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Estimated Cost</p>
            <p className="text-3xl font-heading font-bold text-red-700">~{estimate}</p>
            <p className="text-xs text-stone-500 mt-1">*Materials & Labor included. Rough estimate.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;