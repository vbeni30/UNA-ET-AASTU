"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface UseIntersectionObserverProps {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): [boolean, RefObject<Element>] {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)
  const ref = useRef<Element>(null)
  const frozen = useRef<boolean>(false)

  useEffect(() => {
    const node = ref.current

    // Don't observe if element ref not set, or already frozen
    if (!node || (freezeOnceVisible && frozen.current)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        // Update state only if not frozen
        if (!freezeOnceVisible || !isElementIntersecting) {
          setIntersecting(isElementIntersecting)
        }

        // Freeze if needed
        if (freezeOnceVisible && isElementIntersecting) {
          frozen.current = true
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, threshold, freezeOnceVisible])

  return [isIntersecting, ref]
}
