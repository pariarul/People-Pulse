"use client";

import { motion, useInView, useRef } from "framer-motion"
import { Shield, Lock } from "lucide-react"
import { useState, useEffect } from "react"

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Trust() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Professionals</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-5xl font-bold text-foreground mb-2">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-xl text-muted-foreground">Panelist Satisfaction</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-secondary to-accent rounded-xl mb-4">
              <Lock className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div className="text-5xl font-bold text-foreground mb-2">
              <Counter target={100} suffix="%" />
            </div>
            <div className="text-xl text-muted-foreground">Data Security</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
