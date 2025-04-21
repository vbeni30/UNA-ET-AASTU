"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fallback?: string
  aspectRatio?: string
  preload?: boolean
  fadeIn?: boolean
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.svg",
  aspectRatio = "aspect-video",
  preload = false,
  fadeIn = true,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, ref] = useIntersectionObserver({
    rootMargin: "200px 0px",
    freezeOnceVisible: true,
  })

  // Preload high-priority images
  useEffect(() => {
    if (preload && typeof src === "string") {
      const img = new Image()
      img.src = src
    }
  }, [src, preload])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(aspectRatio, "relative overflow-hidden bg-gray-100 dark:bg-gray-800", className)}
    >
      {(isInView || preload) && (
        <Image
          src={src || fallback}
          alt={alt}
          fill
          sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          quality={props.quality || 80}
          priority={props.priority}
          placeholder={props.placeholder || "blur"}
          blurDataURL={
            props.blurDataURL ||
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZWJlZGVlIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+"
          }
          className={cn(
            "object-cover transition-opacity duration-500",
            fadeIn ? (isLoaded ? "opacity-100" : "opacity-0") : "opacity-100",
          )}
          onLoadingComplete={() => setIsLoaded(true)}
          {...props}
        />
      )}
    </div>
  )
}
