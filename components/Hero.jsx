"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ArrowRight, PieChart, Users } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

/* -------------------- Magnetic Button -------------------- */
const MagneticButton = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

/* -------------------- Hero Section -------------------- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full perspective-2000">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-600 font-semibold text-sm">
              Join <span className="text-blue-600">50,000+</span> Professionals
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { y: 100 },
              visible: {
                y: 0,
                transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
              },
            }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-shimmer">
              Earn Reward Points
            </span>
          </motion.h1>

          {/* Points Text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-xl text-slate-600 mb-8 max-w-lg"
          >
            Earn{" "}
            <span className="font-bold text-slate-900">
              2,000 Points on Sign Up
            </span>{" "}
            and{" "}
            <span className="font-bold text-slate-900">
              2,000 Points for Every Survey
            </span>{" "}
            you complete. Your opinion shapes the future.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/signup">
              <MagneticButton className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
                Join People Pulse
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </Link>

            <Link href="/#about">
              <MagneticButton className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl">
                Learn More
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
{/* Right Visual – Animated Points Gauge */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="relative hidden md:flex items-center justify-center"
>
  <div className="relative w-[420px] h-[420px] flex items-center justify-center">
    {/* Outer Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300/40"
    />

    {/* Inner Glow */}
    <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

    {/* Center Gauge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative z-10 w-[260px] h-[260px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center"
    >
      <p className="text-sm text-slate-500">Total Points</p>
      <p className="text-4xl font-extrabold text-slate-900 mt-2">12,450</p>
      <p className="text-xs text-slate-400 mt-1">Updated live</p>
    </motion.div>

    {/* Mini Reward Chips */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
      className="absolute top-8 left-10 bg-white rounded-xl px-4 py-2 shadow-lg text-sm font-semibold text-blue-600"
    >
      +2,000 Signup
    </motion.div>

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="absolute bottom-10 right-8 bg-white rounded-xl px-4 py-2 shadow-lg text-sm font-semibold text-purple-600"
    >
      +2,000 Survey
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
