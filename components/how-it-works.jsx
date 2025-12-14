"use client"

import { motion, useInView, useRef } from "framer-motion"
import { UserPlus, Mail, ClipboardCheck, Banknote } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account and get $20 instantly",
  },
  {
    icon: Mail,
    title: "Get Survey Invites",
    description: "Receive surveys matching your profile and expertise",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Surveys",
    description: "Share your professional opinions at your convenience",
  },
  {
    icon: Banknote,
    title: "Get Paid",
    description: "Earn $20 for each approved survey completion",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start earning in four simple steps
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg mb-6"
                  >
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </motion.div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
