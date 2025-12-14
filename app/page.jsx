"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import TrustMetrics from "@/components/TrustMetrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden selection:bg-primary/30 selection:text-primary-900">
            <Navbar />
            <Hero />
            <Highlights />
            <Features />
            <Brands />
            <About />
            <HowItWorks />
            <TrustMetrics />
            <Contact />
            <Footer />
        </main>
    );
}
