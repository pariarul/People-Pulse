"use client";

import { Activity, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white group">
              <div className="relative h-24 w-48 overflow-hidden group-hover:opacity-90 transition-opacity">
                <Image
                  src="/people_pulse_full_logo.png"
                  alt="People Pulse Logo"
                  fill
                  className="object-contain object-left invert brightness-0 saturate-0 opacity-100 dark:invert-0"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Join the world's most premium business research panel. Shape the future of industries and get rewarded for your expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Join Panel", "How It Works", "About Us", "Contact"].map(link => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm mb-4">Latest opportunities sent to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">
                Join
              </button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" id="terms" className="rounded bg-slate-800 border-slate-700 text-primary focus:ring-primary" />
              <label htmlFor="terms" className="text-xs text-slate-500">I agree to Terms & Privacy</label>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            &copy; 2024 People Pulse. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
