import { Clock } from 'lucide-react'
import React from 'react'

const CarServicing = () => {
  return (
    <div className="p-2 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <p className="font-medium text-xs text-purple-800">SERVICING DUE</p>
            <span className="text-[8px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">
              OVERDUE
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Mazda 3 (TRN-7821) - 12,000km service
          </p>
          <p className="text-xs text-purple-600 mt-1 flex items-center">
            <Clock className="w-3 h-3 mr-1" /> Last serviced 6 months ago
          </p>
        </div>
  )
}

export default CarServicing
