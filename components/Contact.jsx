"use client";

import { motion } from "framer-motion";
import { Send, Zap, Shield, Activity, Globe, Star } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-white/50"
          >
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                24/7 Support
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                Our global team is always ready to help you.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-style"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-style"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="input-style"
              />

              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="input-style resize-none"
              />

              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition active:scale-95">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* RIGHT — 3D VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]">

              {/* Orbit Icons */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                {[Zap, Shield, Globe].map((Icon, i) => (
                  <div
                    key={i}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
                    style={{ rotate: `${i * 120}deg` }}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                {[Activity, Star].map((Icon, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
                    style={{ rotate: `${i * 180}deg` }}
                  >
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                ))}
              </div>

              {/* Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-200/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-300/20 scale-110 animate-[spin_25s_linear_infinite_reverse]" />
            </div>
          </div>

        </div>
      </div>

      {/* Input style helper */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          outline: none;
          transition: all 0.2s ease;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
      `}</style>
    </section>
  );
};

export default Contact;
