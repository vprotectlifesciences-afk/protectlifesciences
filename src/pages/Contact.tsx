import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Linkedin, Facebook, Twitter, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      // Logic for real submission would go here
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <h4 className="text-primary-light font-bold uppercase tracking-[0.3em] text-sm">Contact Us</h4>
          <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
          <p className="text-primary-light max-w-2xl mx-auto text-lg font-light">
            Have a question about our products or manufacturing capabilities? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="heading-lg">Contact Information</h2>
            <p className="text-gray-500 leading-relaxed">
              We are committed to providing exceptional service and building long-term pharmaceutical partnerships.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="p-4 bg-primary-light text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                  <p className="font-bold text-gray-800">+91 9168304010</p>
                  <p className="font-bold text-gray-800">+91 7385060011</p>
                  <p className="text-sm text-gray-500 mt-1">Phn no: 02047259143</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="p-4 bg-primary-light text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                  <p className="font-bold text-gray-800">sales@protectlifesciences.com</p>
                  <p className="text-sm text-gray-500 mt-1">Our team typically responds within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="p-4 bg-primary-light text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Visit Us</p>
                  <p className="font-bold text-gray-800">Pune, Maharashtra, India</p>
                  <p className="text-sm text-gray-500 mt-1">Visit our WHO-GMP certified facility.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Connect Socially</p>
               <div className="flex gap-4">
                  <a href="#" className="p-4 bg-white rounded-full text-gray-400 hover:text-primary hover:shadow-md transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="p-4 bg-white rounded-full text-gray-400 hover:text-primary hover:shadow-md transition-all"><Facebook size={20} /></a>
                  <a href="#" className="p-4 bg-white rounded-full text-gray-400 hover:text-primary hover:shadow-md transition-all"><Twitter size={20} /></a>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 h-full flex flex-col justify-center min-h-[500px]">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Inquiry Sent Successfully!</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Thank you for reaching out to Protect Life Sciences. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                      <select 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Third-Party Manufacturing</option>
                        <option>Product Export Partnership</option>
                        <option>Quality & Compliance</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
                      <textarea 
                        required
                        rows={6} 
                        placeholder="How can we help you today?" 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button type="submit" className="btn-primary w-full md:w-fit px-12 py-5 flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20">
                        Send Message <Send size={18} />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
         <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
         <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4">
               <MapPin size={48} className="text-primary mx-auto" />
               <p className="text-gray-500 font-bold uppercase tracking-[0.2em]">Our Pune Facility Location</p>
               <p className="text-xs text-gray-400">Map view is being optimized for your region</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;