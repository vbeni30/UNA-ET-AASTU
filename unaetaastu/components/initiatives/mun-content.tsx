"use client"

import { motion } from "framer-motion"
import { Calendar, Globe, Users, Award, BookOpen, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function MunContent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Our MUN Program</h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                The Model United Nations (MUN) program at UNA-ET AASTU Chapter provides students with an immersive
                experience in international diplomacy, negotiation, and global problem-solving. Participants represent
                different countries in simulated UN committees, debating current global issues and drafting resolutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Globe className="mt-1 h-6 w-6 text-un-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Global Perspective</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop a deeper understanding of international relations, global challenges, and the complexities
                    of diplomatic negotiations across diverse cultural contexts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageSquare className="mt-1 h-6 w-6 text-un-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Public Speaking & Debate</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance your public speaking, negotiation, and critical thinking skills through structured debates
                    and formal diplomatic procedures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="mt-1 h-6 w-6 text-un-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Networking Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with like-minded students from AASTU and other universities, building a network of future
                    leaders interested in international affairs and diplomacy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="mt-1 h-6 w-6 text-un-blue flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Leadership Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Take on leadership roles as committee chairs, secretariat members, or delegation leaders, developing
                    valuable organizational and management skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video overflow-hidden rounded-xl lg:aspect-auto lg:h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2574"
              alt="Students participating in a Model UN conference"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming MUN Events</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Join our upcoming Model UN conferences and training sessions to develop your diplomatic skills and expand
              your global awareness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-un-blue/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-un-blue" />
                <div>
                  <h3 className="font-semibold">AASTU Internal MUN</h3>
                  <p className="text-sm text-muted-foreground">May 15-16, 2025</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  A campus-wide Model UN conference focusing on sustainable development and climate action. Perfect for
                  beginners and experienced delegates alike.
                </p>
                <Button variant="link" className="p-0 text-un-blue" asChild>
                  <Link href="/events/register">Register Now</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-un-blue/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-un-blue" />
                <div>
                  <h3 className="font-semibold">MUN Training Workshop</h3>
                  <p className="text-sm text-muted-foreground">April 22, 2025</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  Learn the rules of procedure, resolution writing, and effective public speaking techniques from
                  experienced MUN delegates and coaches.
                </p>
                <Button variant="link" className="p-0 text-un-blue" asChild>
                  <Link href="/events/register">Register Now</Link>
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-r from-un-blue/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-4">
                <Globe className="h-8 w-8 text-un-blue" />
                <div>
                  <h3 className="font-semibold">Regional MUN Conference</h3>
                  <p className="text-sm text-muted-foreground">June 10-12, 2025</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  Join delegates from universities across Ethiopia for a three-day conference addressing pressing
                  regional and global challenges.
                </p>
                <Button variant="link" className="p-0 text-un-blue" asChild>
                  <Link href="/events/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="rounded-xl bg-un-blue/10 p-8 md:p-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Join Our MUN Team</h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Become part of our growing Model UN community at AASTU. No prior experience necessary—just bring your
                enthusiasm for global affairs and willingness to learn!
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button className="bg-un-blue hover:bg-un-darkblue" asChild>
                <Link href="/membership/apply">Apply to Join</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources/model-un">MUN Resources</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
