import { motion } from "framer-motion";
import { Globe, Plane, CheckCircle2, Navigation } from "lucide-react";

const Exports = () => {
  const regions = [
    { 
      name: "Africa Focus", 
      countries: ["Somalia", "Namibia", "South Sudan", "Chad", "Senegal", "Angola"],
      desc: "We have a strong presence and dedicated logistics network across the African continent."
    },
    { 
      name: "Middle East", 
      countries: ["UAE", "Oman", "Kuwait", "Qatar"],
      desc: "Expanding our footprint in the Gulf region with high-quality sterile formulations."
    },
    { 
      name: "Global Reach", 
      countries: ["UK", "Nepal", "Bhutan"],
      desc: "Serving international markets with WHO-GMP compliant pharmaceutical products."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary-light py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Global Reach</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Exporting Excellence <span className="text-primary">Globally</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in India, we are a trusted international partner for high-quality pharmaceutical exports, with a primary focus on the African market.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-primary/10">
                <Globe size={32} className="text-primary" />
                <span className="text-xs font-bold mt-2 uppercase">10+ Countries</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-primary/10">
                <Plane size={32} className="text-primary" />
                <span className="text-xs font-bold mt-2 uppercase">Air/Sea Freight</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
              alt="Logistics" 
              className="relative rounded-3xl shadow-2xl grayscale-[0.2]"
            />
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="heading-lg">Our Strategic Footprint</h2>
            <p className="text-gray-500">We specialize in navigating complex regulatory environments to deliver life-saving medicines where they are needed most.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {regions.map((region, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Navigation size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{region.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{region.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map(country => (
                    <span key={country} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-gray-600 border border-gray-200">
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Africa Map/Focus Area */}
      <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Specialized Africa Export Desk</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Understanding the unique requirements of the African pharmaceutical market is our expertise. We provide comprehensive documentation, WHO-GMP certification, and reliable shipping to ensure seamless customs clearance.
            </p>
            <div className="space-y-4">
               {[
                 "Customized Packaging for Tropical Climates",
                 "Multi-lingual Labeling (French/English/Portuguese)",
                 "Fast-track Documentation for MOH Registration",
                 "Cold-chain Logistics Management"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                   <CheckCircle2 className="text-primary" size={24} />
                   <span className="text-gray-300 font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
             <h3 className="text-2xl font-bold mb-8 text-center text-primary-light">African Partnership Benefits</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <p className="text-4xl font-bold text-primary mb-2">99%</p>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Logistics Reliability</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Partner Support</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <p className="text-4xl font-bold text-primary mb-2">Reg</p>
                   <p className="text-xs uppercase tracking-widest text-gray-500">MOH Assistance</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                   <p className="text-4xl font-bold text-primary mb-2">GMP</p>
                   <p className="text-xs uppercase tracking-widest text-gray-500">International Standards</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="section-padding text-center space-y-8">
        <h2 className="heading-lg">Partner with an International Exporter</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">We are looking for international partners, distributors, and pharmaceutical brands for a long-term collaboration.</p>
        <a href="/contact" className="btn-primary inline-flex items-center gap-2">
          Contact our Export Team <Plane size={18} />
        </a>
      </section>
    </div>
  );
};

export default Exports;