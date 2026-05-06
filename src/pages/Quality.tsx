import { motion } from "framer-motion";
import { ShieldCheck, Award, Microscope, FileCheck, CheckCircle2, FlaskConical } from "lucide-react";

const Quality = () => {
  const certifications = [
    { title: "WHO-GMP", desc: "Adherence to World Health Organization's Good Manufacturing Practices." },
    { title: "ISO 9001:2015", desc: "Global standards for Quality Management Systems." },
    { title: "GLP", desc: "Good Laboratory Practices for our R&D and Quality Control labs." },
    { title: "FSSAI", desc: "Compliance for our Wellness and Nutritional Supplement range." },
  ];

  const processes = [
    { title: "Raw Material Testing", icon: <Microscope /> },
    { title: "In-Process Control", icon: <FlaskConical /> },
    { title: "Stability Testing", icon: <ShieldCheck /> },
    { title: "Final Product QA", icon: <FileCheck /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20"
          >
            <ShieldCheck size={40} className="text-primary-light" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold">Uncompromising Quality</h1>
          <p className="text-xl text-primary-light max-w-3xl mx-auto font-light leading-relaxed">
            Emphasizing WHO-GMP standards in every vial and tablet we manufacture. Quality is not just a process; it's our promise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="heading-lg">Quality Assurance & Compliance</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Protect Life Sciences, we safeguard and protect life sciences with a deep commitment to quality, research, and public health. Our facility operates under the strictest global guidelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {certifications.map((cert, idx) => (
                 <div key={idx} className="p-6 bg-gray-50 rounded-2xl border-l-4 border-primary space-y-2">
                   <h3 className="font-bold text-gray-900">{cert.title}</h3>
                   <p className="text-sm text-gray-500">{cert.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative p-10 bg-primary-light rounded-[3rem] border border-primary/10">
            <h3 className="text-2xl font-bold mb-10 text-center text-primary-dark">Rigorous Testing Process</h3>
            <div className="space-y-6">
              {processes.map((p, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-primary/5"
                >
                  <div className="p-3 bg-primary-light text-primary rounded-xl">
                    {p.icon}
                  </div>
                  <span className="font-bold text-gray-800">{p.title}</span>
                  <CheckCircle2 className="ml-auto text-primary" size={20} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lab Visual */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
           <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-8 text-center md:text-left">
              <h2 className="heading-lg text-2xl md:text-4xl">State-of-the-Art Quality Control Lab</h2>
              <p className="text-gray-600 text-base md:text-lg">
                Our in-house QC lab is equipped with the latest analytical instruments including HPLC, UV Spectrophotometers, and Stability Chambers to ensure every batch meets the highest industry standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
                 {[
                   "Microbiological Testing",
                   "Chemical Analysis",
                   "Sterility Verification",
                   "Particle Count Monitoring",
                   "Bacterial Endotoxin Test",
                   "Stability Studies"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-700">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                     <span>{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-full">
              <img 
                src="/lab.png" 
                alt="Quality Lab" 
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              />
           </div>
        </div>
      </section>

      {/* Vision Reinforcement */}
      <section className="section-padding text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
           <Award className="text-accent-gold mx-auto" size={64} />
           <h2 className="heading-lg">Pioneering Safety and Sustainability</h2>
           <p className="text-gray-500 text-lg leading-relaxed">
             Our commitment to quality extends beyond manufacturing to ensuring sustainability and environmental safety in all our operations. We deliver solutions that meet the highest standards of safety, efficacy, and sustainability.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Quality;