"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { AlertTriangle, RefreshCcw } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AlertTriangle className="mx-auto h-24 w-24 text-red-600" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Something went wrong!</h2>
          <p className="mt-2 text-sm text-gray-600">We apologize for the inconvenience. Please try again.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={reset}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <RefreshCcw className="mr-2 h-5 w-5" />
            Try again
          </button>
        </motion.div>
      </div>
    </div>
  )
}

