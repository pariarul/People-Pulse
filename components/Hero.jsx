"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

/* -------------------- Helpers -------------------- */
const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

/* -------------------- Magnetic Button -------------------- */
const MagneticButton = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouse = (e) => {
    if (isMobile()) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } =
      ref.current.getBoundingClientRect();

    x.set((clientX - (left + width / 2)) * 0.2);
    y.set((clientY - (top + height / 2)) * 0.2);
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
      whileHover={!isMobile() ? { scale: 1.1 } : {}}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

/* -------------------- Hero Section -------------------- */
const Hero = () => {
  const { scrollY } = useScroll();

  // 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    if (isMobile()) return;

    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-slate-600 font-semibold text-sm">
              Join <span className="text-blue-600">50,000+</span> Professionals
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { y: 80 },
              visible: {
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
              Earn Reward Points
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0"
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
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/signup">
              <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl flex items-center justify-center gap-2">
                Join People Pulse
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </Link>

            <Link href="/#about">
              <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl">
                Learn More
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          style={!isMobile() ? { rotateX, rotateY } : {}}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mt-12 md:mt-0 scale-[0.85] sm:scale-95 md:scale-100"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300/40"
            />

            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative z-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center"
            >
              <p className="text-sm text-slate-500">Total Points</p>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                12,450
              </p>
              <p className="text-xs text-slate-400 mt-1">Updated live</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-6 left-6 bg-white rounded-xl px-4 py-2 shadow-lg text-sm font-semibold text-blue-600"
            >
              +2,000 Signup
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-6 right-6 bg-white rounded-xl px-4 py-2 shadow-lg text-sm font-semibold text-purple-600"
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
