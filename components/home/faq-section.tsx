"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "What is UNA-ET AASTU Chapter?",
      answer:
        "The United Nations Association of Ethiopia (UNA-ET) AASTU Chapter is a student-led organization at Addis Ababa Science and Technology University that aims to connect students with the United Nations' mission and values. We focus on raising awareness about global issues, developing leadership skills, and contributing to the Sustainable Development Goals.",
    },
    {
      question: "How can I join the UNA-ET AASTU Chapter?",
      answer:
        "Joining is easy! You can become a member by filling out the membership form on our website, attending one of our recruitment events, or visiting our office on campus. We welcome students from all departments and academic backgrounds.",
    },
    {
      question: "What activities does the chapter organize?",
      answer:
        "We organize a variety of activities including Model UN conferences, SDG hackathons, environmental awareness campaigns, human rights seminars, leadership workshops, community service projects, and networking events with professionals working in international organizations.",
    },
    {
      question: "Do I need prior knowledge about the UN to join?",
      answer:
        "Not at all! We welcome members with all levels of knowledge about the UN and global affairs. Our programs are designed to help you learn and grow, regardless of your starting point. What's most important is your interest in making a positive impact.",
    },
    {
      question: "Can I get leadership experience through the chapter?",
      answer:
        "We offer numerous leadership opportunities through our committee positions, project teams, and event organizing roles. Active members can apply for leadership positions and receive mentorship from senior members and faculty advisors.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <div className="container relative z-10 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-800 dark:text-blue-300 mb-4">
            Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-400 dark:to-blue-200">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            Find answers to common questions about our chapter and how to get involved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-100 dark:border-blue-900/30">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-700 dark:hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild className="rounded-full group">
            <Link href="/about/faq">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

