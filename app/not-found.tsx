'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-8 text-red-600 leading-tight">
          ERROR 404: AGI NOT FOUND
        </h1>
        <p className="text-xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 font-bold text-gray-300 leading-tight">
          Looks like AGI couldn't predict this page either!
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-400 leading-relaxed">
          Our advanced AI algorithms are still trying to figure out what happened... 
          Just kidding, we're as clueless as a neural network in a philosophy class! 🤖
        </p>
        <Link 
          href="/"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors text-base sm:text-lg"
        >
          Back to More AGI Disappointment
        </Link>
      </motion.div>
    </div>
  )
} 