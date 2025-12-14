"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { Send, Zap, Shield, Activity, Globe, Star } from "lucide-react";
import Image from "next/image";


const Contact = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 relative z-10"
          >
            <div className="text-center md:text-left mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                24/7 Support
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-500 text-lg">
                Have questions about our panels? Our global team is ready to help you succeed.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="How can we help you?" />
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right: 3D Visuals & Locations */}
          <div className="relative flex flex-col items-center">
            {/* 3D Rotating Map Container */}
            <div className="relative w-[450px] h-[450px] flex items-center justify-center mb-10 perspective-1000">
              {/* Animated Orbiting Logos */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                  <Zap className="w-8 h-8 fill-current" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                  <Shield className="w-8 h-8 fill-current" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-8 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-purple-600 border border-purple-100">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute top-1/2 right-0 translate-x-8 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-sky-600 border border-sky-100">
                  <Activity className="w-8 h-8" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-fuchsia-600 border border-fuchsia-100">
                  <Star className="w-8 h-8 fill-current" />
                </div>
              </div>

              {/* Floating Rings */}
              <div className="absolute inset-0 border border-blue-200/30 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 border border-dashed border-blue-300/20 rounded-full scale-125 animate-[spin_25s_linear_infinite_reverse]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
