"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Join Panel", href: "/signup" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "z-50 transition-all duration-300",
        scrolled
          ? "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass rounded-full shadow-2xl py-2 px-6 border border-white/40"
          : "fixed top-0 left-0 right-0 bg-transparent py-5"
      )}
    >
      <div className={cn(
        "flex items-center justify-between",
        scrolled ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-40 overflow-hidden group-hover:scale-105 transition-transform">
            <Image
              src="/people_pulse_full_logo.png"
              alt="People Pulse Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu - Lava Lamp Effect */}
        <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-inner">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 rounded-full text-base font-medium text-slate-600 transition-colors hover:text-primary"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white shadow-md rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <button className="px-5 py-2 rounded-full text-slate-600 font-bold hover:text-primary transition-colors text-sm">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="relative px-6 py-2 rounded-full bg-slate-900 text-white font-bold shadow-lg shadow-slate-900/20 overflow-hidden group transition-all hover:scale-105 hover:bg-slate-800 text-sm">
              <span className="relative flex items-center gap-2">
                Get Started
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-white/50 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 glass rounded-3xl shadow-2xl border border-white/40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 font-bold p-4 hover:bg-slate-100 rounded-2xl transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-200 my-2" />
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-300 transition-colors">
                  Log In
                </button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold shadow-lg hover:bg-slate-800 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
