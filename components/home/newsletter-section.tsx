"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
    }, 1500)
  }

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-100 dark:border-blue-900/50">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Subscribe to our newsletter to receive updates on our activities, events, and opportunities to get
                  involved.
                </p>
              </div>

              {isSubscribed ? (
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Thank You for Subscribing!</h3>
                  <p className="text-muted-foreground">You'll now receive our latest updates directly to your inbox.</p>
                  <Button variant="outline" className="mt-4 rounded-full" onClick={() => setIsSubscribed(false)}>
                    Subscribe Another Email
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow border-blue-100 dark:border-blue-900/30 rounded-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              )}

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By subscribing, you agree to receive emails from UNA-ET AASTU Chapter. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
