"use client"

import { Globe } from "lucide-react"
import { useState } from "react"

export function UNLogo() {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="relative w-10 h-10 bg-un-blue rounded-full flex items-center justify-center overflow-hidden shadow-glow">
        <Globe className="h-6 w-6 text-white absolute" />
        <div className="absolute w-full h-full bg-un-darkblue rounded-full animate-pulse opacity-50"></div>
      </div>
    )
  }

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <img src="/UN_emblem_blue.svg" alt="UN Emblem" className="w-10 h-10" onError={() => setImageError(true)} />
    </div>
  )
}
