import { motion } from "framer-motion";
import { FlaskConical, ShieldAlert, HeartPulse, Pill, Apple } from "lucide-react";

const categories = [
  {
    title: "Antibiotics",
    icon: <ShieldAlert size={28} />,
    desc: "High-efficacy antibiotic formulations to tackle critical bacterial infections. Our range covers broad-spectrum and targeted therapies for hospital and community care.",
    highlights: ["Meropenem", "Ceftriaxone", "Piperacillin + Tazobactam", "Amoxicillin + Clavulanate", "Ciprofloxacin"],

    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Critical Care Injections",
    icon: <HeartPulse size={28} />,
    desc: "Life-saving sterile injectables formulated for emergency ICU and critical care settings. Precision-made under WHO-GMP certified standards.",
    highlights: ["Adrenaline", "Noradrenaline", "Dopamine", "Heparin", "Frusemide"],
    color: "from-red-50 to-pink-50",
    border: "border-red-200",
    iconBg: "bg-red-100 text-red-600",
  },
  {
    title: "Nutrition Supplements",
    icon: <Apple size={28} />,
    desc: "Premium nutraceuticals, vitamins, and mineral supplements for wellness, immunity, and recovery. Manufactured to the highest quality standards.",
    highlights: ["Vitamin D3", "Multivitamins", "B-Complex", "Iron & Folic Acid", "Calcium + Magnesium"],
    color: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Sterile Injectables",
    icon: <FlaskConical size={28} />,
    desc: "A comprehensive portfolio of sterile injectable formulations covering gastroenterology, pain management, and immunology.",
    highlights: ["Pantoprazole", "Ondansetron", "Diclofenac", "Methylprednisolone", "Hydrocortisone"],
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Wellness & OTC",
    icon: <Pill size={28} />,
    desc: "Over-the-counter and wellness formulations for everyday health needs, designed for both domestic and export markets.",
    highlights: ["Paracetamol Infusion", "Zinc Sulphate", "ORS", "Antacids", "Cough Syrups"],
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-700",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Product Portfolio</h4>
          <h1 className="text-4xl md:text-5xl font-bold">Our Comprehensive Product Range</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Categorized high-quality pharmaceutical formulations — Antibiotics, Critical Care, Nutrition Supplements, and more.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br ${cat.color} border ${cat.border} rounded-3xl p-8 shadow-sm flex flex-col justify-between`}
            >
              {/* Icon + Title */}
              <div className="space-y-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.iconBg}`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>

                {/* Sample molecules */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-white/70 border border-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {h}
                    </span>
                  ))}
                  <span className="text-xs text-gray-400 px-3 py-1 font-medium italic">& more...</span>
                </div>
              </div>


            </motion.div>
          ))}
        </div>
      </section>



      {/* Inquiry CTA */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto bg-primary rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Looking for a specific formulation?</h3>
          <p className="text-primary-light mb-8 relative z-10">We specialize in developing custom sterile injections and life-saving medicines.</p>
          <a href="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-primary-light transition-all relative z-10">
            Send an Inquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;