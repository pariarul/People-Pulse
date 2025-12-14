"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">
            About People Pulse
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Connecting Professionals with <span className="text-gradient">Global Brands</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            People Pulse recruits employed professionals for paid research. We bridge the gap between decision-makers and the brands that serve them. Your insights drive innovation, and we ensure you're fairly rewarded for your expertise.
          </p>

          <ul className="space-y-4">
            {[
              "Earn rewards for every approved survey",
              "Data is 100% secure and confidential",
              "Impact real-world products and services"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Illustration - 3D Tech Card */}
        <div className="flex-1 relative perspective-1000">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl opacity-50 transform -rotate-3 scale-110 z-0" />

          <motion.div
            initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            viewport={{ once: true }}
            className="relative z-10 glass-dark p-2 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group transform-style-3d bg-slate-900/40 backdrop-blur-xl"
          >
            {/* Window Controls (Dev Vibe) */}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mt-8 bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
              <img
                src="/about-illustration.png"
                alt="Diverse Professional Team"
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Scanning Line Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[scan_4s_linear_infinite]" />
            </div>

            {/* Floating Tech Badge (Replaces generic badge) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 z-30"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              <div className="text-white text-sm font-mono">
                <span className="text-slate-400">&lt;</span>
                <span className="text-blue-300">Status</span>
                <span className="text-slate-400">/&gt;</span> Verified
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
