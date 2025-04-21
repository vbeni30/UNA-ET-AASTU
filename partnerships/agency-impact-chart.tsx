"use client"

import { useState, useEffect } from "react"

export default function AgencyImpactChart() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
  }

  // Simple chart implementation
  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <div className="w-24 text-sm font-medium">UNDP</div>
          <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
          </div>
          <div className="w-12 text-right text-sm font-medium">85%</div>
        </div>
        <div className="flex items-center">
          <div className="w-24 text-sm font-medium">UNICEF</div>
          <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full" style={{ width: "72%" }}></div>
          </div>
          <div className="w-12 text-right text-sm font-medium">72%</div>
        </div>
        <div className="flex items-center">
          <div className="w-24 text-sm font-medium">AU</div>
          <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-600 rounded-full" style={{ width: "68%" }}></div>
          </div>
          <div className="w-12 text-right text-sm font-medium">68%</div>
        </div>
        <div className="flex items-center">
          <div className="w-24 text-sm font-medium">EU</div>
          <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: "63%" }}></div>
          </div>
          <div className="w-12 text-right text-sm font-medium">63%</div>
        </div>
        <div className="flex items-center">
          <div className="w-24 text-sm font-medium">UN</div>
          <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "90%" }}></div>
          </div>
          <div className="w-12 text-right text-sm font-medium">90%</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
        Partnership Engagement Level (%) - Based on 2023-2024 Collaboration Data
      </div>
    </div>
  )
}
