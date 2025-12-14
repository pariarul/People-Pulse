"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Wallet } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: MessageSquare,
            title: "Share Your Opinions",
            description: "Answer interesting questions about your industry and role.",
        },
        {
            icon: Zap,
            title: "Influence Products",
            description: "Help brands shape the future of their services.",
        },
        {
            icon: Wallet,
            title: "Get Paid Quickly",
            description: "Redeem your rewards via PayPal or Gift Cards instantly.",
        },
    ];

    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">What's In It For You?</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
