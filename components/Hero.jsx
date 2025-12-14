"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, DollarSign, PieChart, Users } from "lucide-react";
import Link from "next/link";

const MagneticButton = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // Sensitivity
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // 3D Tilt Logic
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
      {/* Dynamic Mesh Gradient Background */}
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
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div variant={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg mb-8 hover:scale-105 transition-transform cursor-default ring-1 ring-slate-100">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-600 font-semibold text-sm">Join <span className="text-blue-600">50,000+</span> Professionals</span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              variants={{
                hidden: { y: 100 },
                visible: { y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } }
              }}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900"
            >
              Get Paid for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-300% animate-shimmer">
                Professional Opinion
              </span>
            </motion.h1>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-slate-600 mb-8 max-w-lg"
          >
            Earn <span className="font-bold text-slate-900">$20 to Sign Up</span>, and <span className="font-bold text-slate-900">$20 for Every Survey</span> you complete. Influence the next generation.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/signup">
              <MagneticButton className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group hover:shadow-2xl hover:shadow-blue-500/40">
                Join People Pulse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </Link>
            <Link href="/#about">
              <MagneticButton className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl flex items-center justify-center hover:bg-white hover:shadow-xl hover:border-white">
                Learn More
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visuals (3D Tilt Parallax) */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative h-[600px] hidden md:block"
        >
          <motion.div
            style={{ z: 50, rotateX: rotateX, rotateY: rotateY, y: y1 }}
            className="absolute inset-0 z-20 flex items-center justify-center transition-all duration-200 ease-out"
          >
            <motion.img
              src="/hero-illustration.png"
              alt="People Pulse Platform Analysis"
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{ scale: 1.1 }}
            />
          </motion.div>

          {/* Floating Data Overlay - Top Right */}
          <motion.div
            style={{ z: 100, x: -20, y: y2 }}
            className="absolute top-20 right-10 glass-dark rounded-3xl p-5 flex items-center gap-4 z-30 shadow-2xl border border-white/10"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">50k+</div>
              <div className="text-slate-400 text-xs">Active Users</div>
            </div>
          </motion.div>

          {/* Floating Data Overlay - Bottom Left */}
          <motion.div
            style={{ z: 80, x: 20, y: y1 }}
            className="absolute bottom-20 left-10 glass-dark rounded-3xl p-5 flex items-center gap-4 z-30 shadow-2xl border border-white/10"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <PieChart className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Data Impact</div>
              <div className="text-slate-400 text-xs">Real-time Analytics</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
