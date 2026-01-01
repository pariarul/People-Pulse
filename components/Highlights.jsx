"use client";

import { motion } from "framer-motion";
import { Coins, TrendingUp, Users } from "lucide-react";

const Highlights = () => {
  const cards = [
    {
      icon: Coins,
      title: "2,000 Points",
      subtitle: "Instant Sign-Up Bonus",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "2,000 Points",
      subtitle: "Earn Per Survey",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "All Professionals",
      subtitle: "Everyone Can Earn",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-slate-200 to-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="relative rounded-3xl bg-white p-10 h-full flex flex-col items-center text-center gap-6 overflow-hidden">
                {/* Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-20 blur-3xl`}
                />

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}
                >
                  <card.icon className="w-10 h-10" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {card.subtitle}
                  </p>
                </div>

                {/* Footer Tag */}
                <span className="mt-4 inline-block text-xs font-semibold px-4 py-1 rounded-full bg-slate-100 text-slate-500">
                  Rewards System
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
