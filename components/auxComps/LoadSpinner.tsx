"use client"

import { Dna } from "lucide-react"
import { motion } from "framer-motion"

export default function LoadSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-black border-opacity-10"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Dna className="w-8 h-8 text-black" />
        </motion.div>
      </motion.div>
    </div>
  )
}