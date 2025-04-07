"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function RecruitmentStrategy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-blue-50/50 dark:bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Our Strategy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Recruitment Strategy
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            How we plan to build a diverse and engaged membership base at AASTU.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
          <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-blue-100 dark:border-blue-900/50">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  Our Approach
                </h3>

                <p className="text-muted-foreground">
                  We will recruit members through social media campaigns, campus posters, and info sessions. Recruitment
                  events, such as a launch workshop and SDG awareness day, will introduce students to UNA-ET's mission.
                </p>

                <p className="text-muted-foreground">
                  We'll focus on engaging diverse departments, ensuring inclusion from all academic backgrounds. Our
                  chapter is committed to fostering a welcoming environment where students of all genders, ethnicities,
                  and disciplines can contribute, promoting diversity as a core value in both leadership and
                  participation.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-2">Diversity Commitment</h4>
                  <p>
                    Our chapter is committed to fostering a welcoming environment where students of all genders,
                    ethnicities, and disciplines can contribute, promoting diversity as a core value in both leadership
                    and participation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
                  Key Recruitment Activities
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue"
                      >
                        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <circle cx="12" cy="10" r="2"></circle>
                        <line x1="8" x2="8" y1="2" y2="4"></line>
                        <line x1="16" x2="16" y1="2" y2="4"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Launch Workshop</h4>
                      <p className="text-sm text-muted-foreground">
                        Introducing UNA-ET's mission and the chapter's goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">SDG Awareness Day</h4>
                      <p className="text-sm text-muted-foreground">
                        Engaging students with the Sustainable Development Goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Departmental Outreach</h4>
                      <p className="text-sm text-muted-foreground">
                        Targeted recruitment across all 13 AASTU departments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-un-blue"
                      >
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Social Media Campaigns</h4>
                      <p className="text-sm text-muted-foreground">
                        Digital outreach to engage the wider student community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

