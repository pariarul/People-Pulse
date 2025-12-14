"use client";

import { motion, useInView } from "framer-motion"
import { UserPlus, Mail, FileText, Gift } from "lucide-react"
import { useRef } from "react"

const HowItWorks = () => {
    const steps = [
        { icon: UserPlus, title: "Sign Up", desc: "Create your profile in 2 mins" },
        { icon: Mail, title: "Get Invites", desc: "Receive tailored survey invites" },
        { icon: FileText, title: "Complete Surveys", desc: "Share your professional opinion" },
        { icon: Gift, title: "Get Paid", desc: "Redeem rewards instantly" },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Start earning in four simple steps.</p>
                </div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute top-1/2 left-0 right-0 h-1 bg-primary origin-left -translate-y-1/2 hidden md:block"
                    />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="flex flex-col items-center text-center bg-white md:bg-transparent p-6 rounded-2xl md:p-0 shadow-sm md:shadow-none"
                            >
                                <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-lg relative group">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    <step.icon className="w-8 h-8 text-primary relative z-10" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-500 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
