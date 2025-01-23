"use client"

import { motion } from "framer-motion"

export default function AccountDetails({user}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow rounded-lg p-6"
    >
      <h2 className="text-2xl text-black font-bold mb-4">Account Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="mt-1 text-sm text-gray-900">{user?.fullName || user?.firstName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-sm text-gray-900">{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subscription</label>
          <p className="mt-1 text-sm text-gray-900">Pro Plan</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Edit Profile
        </motion.button>
      </div>
    </motion.div>
  )
}

