"use client";

import { motion } from "framer-motion";

const TrustMetrics = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-white/10 backdrop-blur-md"
                >
                    <div className="text-6xl font-extrabold mb-2">100%</div>
                    <div className="text-blue-100 text-lg">Panelist Satisfaction</div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl bg-white/10 backdrop-blur-md"
                >
                    <div className="text-6xl font-extrabold mb-2">100%</div>
                    <div className="text-blue-100 text-lg">Data Security</div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustMetrics;
