import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Factory, Globe, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const countries = [
    { name: "India", code: "in" },
    { name: "Nepal", code: "np" },
    { name: "UAE", code: "ae" },
    { name: "UK", code: "gb" },
    { name: "Somalia", code: "so" },
    { name: "Namibia", code: "na" },
    { name: "South Sudan", code: "ss" },
    { name: "Chad", code: "td" },
    { name: "Senegal", code: "sn" },
    { name: "Angola", code: "ao" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Pharmaceutical Plant"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-4 md:space-y-6 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary-light font-bold tracking-widest uppercase text-xs md:text-sm">
              <ShieldCheck size={18} />
              <span>WHO-GMP Certified Facility</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Pioneering <span className="text-primary-light">Innovations</span> in Life Sciences
            </h1>
            <p className="text-base md:text-xl text-gray-200 font-light max-w-lg mx-auto md:mx-0">
              Committed to human health and safety through high-quality sterile injections and critical care formulations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <Link to="/products" className="btn-primary flex items-center justify-center gap-2 group">
                Explore Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/manufacturing" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary text-center">
                Manufacturing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Factory className="text-primary" />, label: "State-of-the-art Plant" },
            { icon: <ShieldCheck className="text-primary" />, label: "WHO-GMP Standards" },
            { icon: <Globe className="text-primary" />, label: "Global Export Reach" },
            { icon: <FlaskConical className="text-primary" />, label: "High-Quality Formulations" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-primary-light rounded-2xl">{item.icon}</div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Summary */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Presence</h4>
              <h2 className="heading-lg">Committed to Advancing Health and Improving Lives</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                At Protect Life Sciences Pvt Ltd, we specialize in sterile injections, with a strong focus on antibiotics, critical care, and life-saving formulations. Based in Pune, Maharashtra, we operate a state-of-the-art manufacturing facility that meets WHO-GMP standards.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0">
              <div className="p-6 bg-primary-light rounded-3xl space-y-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">10+</h3>
                <p className="text-[10px] md:text-xs font-bold text-primary-dark uppercase">Countries Reached</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-3xl space-y-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">50+</h3>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">Product SKUs</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary rounded-3xl rotate-3 opacity-10"></div>
            <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold mb-6 text-center border-b pb-4 border-gray-100 text-gray-800">Global Reach & Flagship Markets</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 overflow-hidden">
                {countries.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-10 h-7 md:w-12 md:h-8 rounded shadow-sm overflow-hidden border border-gray-100 transition-transform group-hover:scale-110">
                      <img
                        src={`https://flagcdn.com/w160/${c.code}.png`}
                        alt={`Flag of ${c.name} - Protect Life Sciences Export Market`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] md:text-[11px] font-bold text-gray-500 group-hover:text-primary transition-colors text-center">{c.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <Link to="/exports" className="text-primary font-bold text-sm hover:underline flex items-center justify-center gap-2">
                  View Full Global Reach <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Area */}
      <section className="bg-gray-50 section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="heading-lg">Core Specializations</h2>
          <p className="text-gray-500">We focus heavily on sterile injectables, antibiotics, nutrition supplements, and third-party manufacturing solutions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Antibiotics", 
              desc: "A wide range of high-efficacy antibiotic formulations for critical infections.",
              link: "/products"
            },
            { 
              title: "Critical Care", 
              desc: "Life-saving sterile injections designed for emergency and hospital care.",
              link: "/products"
            },
            { 
              title: "Nutrition Supplements", 
              desc: "High-quality vitamins, minerals, and nutraceutical supplements for wellness and recovery.",
              link: "/products"
            },
            { 
              title: "3rd Party Mfg", 
              desc: "Big focus and our core strength. We are a trusted partner for global brands.",
              link: "/manufacturing"
            }
          ].map((item, idx) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-1 bg-primary"></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <Link to={item.link} className="mt-8 text-primary font-bold text-sm flex items-center gap-2">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="heading-lg">Ready to Partner With a Leading Pharma Manufacturer?</h2>
          <p className="text-primary-light text-lg">Whether you are looking for third-party manufacturing or a distributor seeking quality products, we are your trusted collaborator.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary-light transition-all">
              Partner With Us
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
