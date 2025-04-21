"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface CustomLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function CustomLink({ href, children, className, onClick }: CustomLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Execute any additional onClick handler if provided
    if (onClick) {
      onClick()
    }

    // Navigate to the new page
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
