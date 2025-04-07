"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle } from "lucide-react"

export function BecomePartnerContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    "Access to talented pool of students and future leaders",
    "Opportunity to contribute to sustainable development goals",
    "Brand visibility within the university community",
    "Participation in events and initiatives",
    "Potential for collaborative research and innovation",
  ]

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Join Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Become a Partner
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Partner with us to support our mission and make a difference in the lives of students and the community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
              Partner Benefits
            </h3>

            <p className="text-muted-foreground">
              By partnering with the UNA-ET AASTU Chapter, you'll be supporting the development of future leaders who
              are committed to addressing global challenges through the framework of the United Nations.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-un-blue shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Partnership Levels</h4>
              <p className="mb-4">
                We offer various partnership levels to accommodate different organizations and their goals. From in-kind
                donations to financial support, we welcome all forms of partnership.
              </p>
              <Button className="bg-white text-blue-800 hover:bg-blue-50 group rounded-full">
                Download Partnership Brochure
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-blue-100 dark:border-blue-900/30 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Partner Inquiry Form</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="organization-name" className="text-sm font-medium">
                        Organization Name
                      </label>
                      <Input id="organization-name" placeholder="Your organization" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organization-type" className="text-sm font-medium">
                        Organization Type
                      </label>
                      <Input id="organization-type" placeholder="NGO, Company, etc." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-person" className="text-sm font-medium">
                      Contact Person
                    </label>
                    <Input id="contact-person" placeholder="Full name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="+251 123 456 789" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="partnership-interest" className="text-sm font-medium">
                      Partnership Interest
                    </label>
                    <Textarea
                      id="partnership-interest"
                      placeholder="Please describe how you'd like to partner with us"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full group">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

