import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Advancements in Sterile Injectable Technology",
      date: "May 15, 2026",
      author: "Dr. Sharma",
      category: "Innovation",
      desc: "Exploring the latest trends in automated sterile filling and how it ensures 100% product safety."
    },
    {
      title: "Expanding Our Reach in the African Market",
      date: "May 10, 2026",
      author: "Export Team",
      category: "News",
      desc: "Protect Life Sciences strengthens logistics network in Angola and Senegal to improve medicine access."
    },
    {
      title: "Understanding WHO-GMP Compliance for Pharma Mfg",
      date: "May 02, 2026",
      author: "Quality Dept",
      category: "Compliance",
      desc: "A deep dive into why WHO-GMP standards are critical for global pharmaceutical trade and patient safety."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm">Blog & News</h4>
          <h1 className="text-4xl md:text-5xl font-bold">Latest Updates from Protect Life Sciences</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Stay informed about our latest innovations, global expansions, and pharmaceutical industry insights.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-56 md:h-64 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] mb-6 bg-gray-100">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors"></div>
                 <img 
                    src={`https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800&sig=${idx}`} 
                    alt={`Pharmaceutical Insights: ${post.title}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
                    loading="lazy"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {post.category}
                 </div>
              </div>
              <div className="space-y-4 px-2 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] md:text-xs text-gray-400">
                   <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                   <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.desc}
                </p>
                <div className="mt-auto pt-2">
                  <span className="text-primary font-bold text-sm flex items-center gap-2">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto glass-card !bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center space-y-6 md:space-y-8 border-gray-100">
           <h2 className="text-2xl md:text-4xl font-bold">Subscribe to Our Newsletter</h2>
           <p className="text-gray-500 text-sm md:text-base">Get the latest pharmaceutical news and product updates delivered to your inbox.</p>
           <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="Your professional email" 
                className="flex-grow px-6 md:px-8 py-3 md:py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe Now</button>
           </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;