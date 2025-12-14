"use client";

import { motion, useInView } from "framer-motion"
import { DollarSign, BarChart3, Briefcase } from "lucide-react"
import { useRef } from "react"

const Highlights = () => {
  const cards = [
    {
      icon: DollarSign,
      title: "$20 to Sign Up",
      subtitle: "Instant Bonus",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: BarChart3,
      title: "$20 Per Survey",
      subtitle: "High Rewards",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Briefcase,
      title: "All Job Titles",
      subtitle: "Professionals Wanted",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, rotateX: 5 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-6 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform perspective-1000"
            >
              <div className={`w-20 h-20 rounded-2xl ${card.color} flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform`}>
                <card.icon className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-500 font-medium">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
