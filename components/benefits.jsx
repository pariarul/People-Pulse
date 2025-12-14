"use client"

import { motion, useInView, useRef } from "framer-motion"
import { MessageSquare, ShoppingBag, Wallet } from "lucide-react"


const benefits = [
  {
    icon: MessageSquare,
    title: "Share Your Opinions",
    description: "Your professional insights matter. Help shape products and services used by millions.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Influence Products & Services",
    description: "Work with leading brands to improve their offerings and customer experiences.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    description: "Earn real rewards for your time and expertise with every completed survey.",
    gradient: "from-accent to-primary",
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What's In It For You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your professional experience into valuable rewards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl p-8 glass shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-6`}
                  >
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
