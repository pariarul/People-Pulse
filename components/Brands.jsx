"use client";

import { motion } from "framer-motion";

const Brands = () => {
  // Placeholder logos (text for now, can be replaced with SVGs)
  const brands = [
    "Google", "Amazon", "Microsoft", "Salesforce", "Adobe", "Slack", "HubSpot", "Oracle", "IBM", "Intel"
  ];

  return (
    <section className="py-12 bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">Generating Insights for Hundreds of Brands</p>
      </div>

      <div className="flex relative items-center">
        {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="text-2xl font-bold text-slate-600 hover:text-white transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
