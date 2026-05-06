import { motion } from "framer-motion";
import { Factory, ShieldCheck, Zap, CheckCircle2, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const benefits = [
    { 
      title: "WHO-GMP Standards", 
      desc: "Our state-of-the-art facility adheres to global manufacturing guidelines for safety and quality.",
      icon: <ShieldCheck className="text-primary" size={28} />
    },
    { 
      title: "Cost Efficiency", 
      desc: "Leverage our economies of scale to reduce your production costs without compromising quality.",
      icon: <Zap className="text-primary" size={28} />
    },
    { 
      title: "Rapid Turnaround", 
      desc: "Efficient processes and advanced machinery ensure your products reach the market on time.",
      icon: <CheckCircle2 className="text-primary" size={28} />
    },
    { 
      title: "Expert R&D Team", 
      desc: "Our scientists collaborate with you to develop and refine formulations to your exact specs.",
      icon: <FlaskConical className="text-primary" size={28} />
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/hero.png" 
            alt="Factory background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary-light font-bold uppercase tracking-[0.3em] text-sm"
          >
            Core Strength
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold"
          >
            Third-Party Manufacturing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light"
          >
            Your trusted partner for high-quality sterile injections and pharmaceutical manufacturing in India.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="heading-lg text-2xl md:text-4xl">Partner With Excellence</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Protect Life Sciences, third-party manufacturing is our primary focus and core strength. We operate a state-of-the-art manufacturing facility in Pune, Maharashtra, that meets WHO-GMP standards.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Whether you are an established pharmaceutical brand or a growing company, we provide the infrastructure, expertise, and quality assurance needed to bring your sterile injectables and antibiotic products to life.
            </p>
            <div className="flex flex-col gap-4">
               {[
                 "Custom Formulation Development",
                 "Small & Large Batch Production",
                 "Advanced Packaging Solutions",
                 "Regulatory Support & Documentation"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 font-semibold text-gray-700 text-sm md:text-base">
                   <CheckCircle2 className="text-primary" size={20} />
                   <span>{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 order-1 lg:order-2">
             <img 
               src="/lab.png" 
               alt="Manufacturing" 
               className="rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl w-full object-cover h-[300px] md:h-[500px]"
             />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="heading-lg">Why Choose Us?</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 space-y-4"
            >
              <div className="p-3 md:p-4 bg-primary-light w-fit rounded-xl md:rounded-2xl">{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capacity Info */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-white relative">
          <div className="absolute bottom-0 right-0 w-full h-full opacity-10 hidden md:flex justify-end items-end p-8">
            <Factory size={400} />
          </div>
          <div className="absolute bottom-0 right-0 opacity-10 flex md:hidden p-4">
            <Factory size={150} />
          </div>
          <div className="max-w-2xl space-y-6 md:space-y-8 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">State-of-the-art Infrastructure</h2>
            <p className="text-primary-light text-base md:text-lg">
              Our facility is equipped with high-speed automated filling and sealing machines, advanced sterilization units, and a dedicated quality control lab.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="border-l-0 md:border-l-2 border-primary-light md:pl-6 py-2">
                 <p className="text-3xl md:text-3xl font-bold">500k+</p>
                 <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary-light opacity-70">Daily Injectable Capacity</p>
               </div>
               <div className="border-l-0 md:border-l-2 border-primary-light md:pl-6 py-2">
                 <p className="text-3xl md:text-3xl font-bold">100%</p>
                 <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary-light opacity-70">Sterile Environment (Class 100)</p>
               </div>
            </div>
            <div className="pt-4 md:pt-6">
              <Link to="/contact" className="btn-primary !bg-white !text-primary hover:!bg-primary-light inline-block w-full md:w-auto text-center">
                Request Facility Tour / Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;