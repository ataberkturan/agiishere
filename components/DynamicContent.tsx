'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './Footer'
import { getRandomMessage } from '../utils/messages'

export default function DynamicContent() {
  const [showJumpscare, setShowJumpscare] = useState(false)
  const [message, setMessage] = useState(getRandomMessage())

  useEffect(() => {
    const timer = setTimeout(() => setShowJumpscare(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showJumpscare && (
          <motion.div
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="text-center px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-8 text-red-600 leading-tight">
              {message.title}
            </h1>
            <p className="text-xl sm:text-3xl md:text-5xl mb-4 sm:mb-8 font-bold text-gray-300 leading-tight">
              {message.subtitle}
            </p>
            <p className="text-lg sm:text-xl md:text-3xl font-normal text-gray-400 leading-relaxed">
              {message.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  )
}

