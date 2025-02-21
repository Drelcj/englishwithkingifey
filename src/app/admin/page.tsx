import Link from 'next/link'
import React from 'react'

const admin = () => {
  return (
    <div className="min-h-screen container mx-auto p-4 mt-8">Admin page coming soon, please navigate to your <Link href="/admin/dashboard">
    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Dashboard
    </button>
  </Link></div>
  )
}

export default admin