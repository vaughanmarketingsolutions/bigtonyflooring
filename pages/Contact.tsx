import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thanks! Big Tony will give you a call shortly.");
  };

  return (
    <div className="min-h-screen bg-stone-100">
      
      <div className="bg-red-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Get Your Floors Done</h1>
              <p className="text-xl opacity-90">Fill out the form below or just give us a ring.</p>
          </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Form Section */}
            <div className="lg:w-2/3 p-8 md:p-12">
                <h2 className="text-2xl font-heading font-bold mb-6 text-stone-800">Request a Free Estimate</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Your Name</label>
                            <input 
                                {...register("name", { required: true })} 
                                className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-red-600 text-xs mt-1">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                            <input 
                                {...register("phone", { required: true })} 
                                className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
                                placeholder="(910) 890-4787"
                            />
                             {errors.phone && <span className="text-red-600 text-xs mt-1">Required</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                            <input 
                                type="email"
                                {...register("email", { required: true })} 
                                className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
                                placeholder="john@example.com"
                            />
                             {errors.email && <span className="text-red-600 text-xs mt-1">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-stone-700 mb-2">Interested In</label>
                            <select 
                                {...register("service")} 
                                className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
                            >
                                <option value="Consultation">Not Sure / Consultation</option>
                                <option value="Hardwood">Hardwood</option>
                                <option value="LVP">LVP (Vinyl Plank)</option>
                                <option value="LVT">LVT (Vinyl Tile)</option>
                                <option value="Tile">Tile / Stone</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-2">Project Details</label>
                        <textarea 
                            {...register("message")} 
                            rows={4}
                            className="w-full p-3 border-2 border-stone-200 rounded focus:border-red-700 focus:outline-none bg-stone-50"
                            placeholder="Tell us about your project (approx sq ft, rooms, etc.)"
                        ></textarea>
                    </div>

                    <Button type="submit" size="lg" fullWidth>Send Request</Button>
                </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:w-1/3 bg-stone-900 text-stone-300 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <h3 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Contact Info</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <MapPin className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                            <span>Based in Wilmington, NC<br />Serving NC, SC, & VA</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                            <a href={`tel:${PHONE_NUMBER}`} className="text-white font-bold text-lg hover:text-red-500">{PHONE_NUMBER}</a>
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-6 h-6 mr-4 text-red-600 shrink-0" />
                            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h3 className="text-white font-heading font-bold text-xl mb-6 uppercase tracking-wider">Business Hours</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-stone-800 pb-2">
                            <span>Monday - Friday</span>
                            <span className="text-white">7:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-stone-800 pb-2">
                            <span>Saturday</span>
                            <span className="text-white">8:00 AM - 2:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sunday</span>
                            <span className="text-red-500 font-bold">Closed</span>
                        </li>
                    </ul>
                </div>
                
                {/* Mobile Call CTA */}
                <div className="mt-8 lg:hidden">
                    <a href={`tel:${PHONE_NUMBER}`}>
                        <Button fullWidth variant="secondary">Tap to Call Now</Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;