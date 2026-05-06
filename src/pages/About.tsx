import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award } from "lucide-react";

const About = () => {
  const missionPoints = [
    "To protect life sciences by delivering innovative and effective solutions that meets the highest standards of safety, efficacy, and sustainability.",
    "To manufacture and supply pharmaceutical products that meets the highest industry standards.",
    "To contribute to the global fight against diseases through the development of innovative medicines.",
    "To safeguard and protect life sciences with a deep commitment to quality, research, and public health.",
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gray-50 py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm">About Us</h4>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Protecting Lives Through Quality Pharmaceuticals
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A leading pharmaceutical company in Pune, India, specializing in high-quality antibiotic injections, critical care products & Pioneer in wellness and Supplements products, and third-party manufacturing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src="/lab.png"
              alt="Scientists in Lab"
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] md:h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <Award className="text-primary" size={40} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Industry Leader</p>
                  <p className="text-base md:text-lg font-bold">WHO-GMP Standard</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="heading-lg text-center">Who We Are</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-center">
            <p>
              At Protect Life Sciences Pvt Ltd, we are committed to advancing health and improving lives through the development, manufacturing, and delivery of premium pharmaceutical products.
            </p>
            <p>
              Based in Pune, Maharashtra, we specialize in sterile injections, with a strong focus on antibiotics, critical care, and life-saving formulations. We operate a state-of-the-art manufacturing facility that meets WHO-GMP standards, ensuring every product delivers safety, efficacy, and reliability.
            </p>
            <p>
              Whether you are a pharmaceutical brand looking for third-party manufacturing, a distributor seeking quality products, or an international partner for exports (especially to Africa), we are your trusted collaborator.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary text-white section-padding relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* Vision */}
          <div className="space-y-8 p-10 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl"><Eye size={32} className="text-primary-light" /></div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-xl leading-relaxed text-primary-light font-light">
              "To be a global leader in the pharmaceutical industry, pioneering innovations in life sciences while maintaining an unwavering commitment to human health and safety."
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-8 p-10 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl"><Target size={32} className="text-primary-light" /></div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <ul className="space-y-6">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm md:text-base leading-relaxed font-light">
                  <ShieldCheck className="text-primary-light shrink-0 mt-1" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values / Focus */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="heading-lg">Our Focus & Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Sterile Injectables",
              "Antibiotics",
              "Third-Party Manufacturing",
              "WHO-GMP Standards"
            ].map((focus, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <p className="font-bold text-primary tracking-wide uppercase text-sm">{focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
