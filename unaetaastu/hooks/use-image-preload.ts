"use client"

import { useState, useEffect } from "react"

export function useImagePreload(src: string): boolean {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!src) {
      setImageLoaded(false)
      return
    }

    // Reset state when src changes
    setImageLoaded(false)

    const img = new Image()
    img.src = src

    const handleLoad = () => {
      setImageLoaded(true)
    }

    // If image is already cached, it might have already loaded
    if (img.complete) {
      setImageLoaded(true)
    } else {
      img.addEventListener("load", handleLoad)
    }

    return () => {
      img.removeEventListener("load", handleLoad)
    }
  }, [src])

  return imageLoaded
}
