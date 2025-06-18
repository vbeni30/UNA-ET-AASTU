"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Users, Award, Building } from "lucide-react"
import Image from "next/image"

export function History() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              From humble beginnings to a thriving chapter, explore the key milestones in our history.
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Founding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <Calendar className="mr-1 h-4 w-4" />
                  2018
                </div>
                <h3 className="text-2xl font-bold">Founding</h3>
                <p className="text-muted-foreground">
                  The UNA-ET AASTU Chapter was established by a group of passionate students and faculty members who
                  recognized the need for greater engagement with UN initiatives on campus. With just 15 founding
                  members, the chapter began its mission to promote the principles and work of the United Nations.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070"
                  alt="Founding members of UNA-ET AASTU Chapter"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* First Initiatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2074"
                  alt="First initiative of UNA-ET AASTU Chapter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <Calendar className="mr-1 h-4 w-4" />
                  2019
                </div>
                <h3 className="text-2xl font-bold">First Initiatives</h3>
                <p className="text-muted-foreground">
                  Within its first year, the chapter launched two key initiatives: a campus-wide SDG awareness campaign
                  and a Model UN simulation. These early programs laid the foundation for our future work and helped
                  establish our reputation for meaningful engagement with global issues.
                </p>
              </div>
            </motion.div>

            {/* MOU (Memorandum of Understanding) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <FileText className="mr-1 h-4 w-4" />
                  2025
                </div>
                <h3 className="text-2xl font-bold">MOU (Memorandum of Understanding)</h3>
                <p className="text-muted-foreground">
                  A significant milestone was reached when we signed a formal Memorandum of Understanding with the
                  United Nations Association of Ethiopia. This partnership provided our chapter with greater resources,
                  recognition, and opportunities for collaboration with other UNA chapters across the country.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="/IMG_0661.JPG"
                  alt="MOU signing ceremony between UNA-ET and AASTU representatives"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Launch Event */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                  alt="Official launch event of UNA-ET AASTU Chapter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <Building className="mr-1 h-4 w-4" />
                  2021
                </div>
                <h3 className="text-2xl font-bold">Launch Event</h3>
                <p className="text-muted-foreground">
                  Following the MOU, we organized an official launch event attended by university leadership, UN
                  representatives, and government officials. This high-profile event marked our formal recognition and
                  established our chapter as a key player in promoting UN values and initiatives within the academic
                  community.
                </p>
              </div>
            </motion.div>

            {/* Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <Award className="mr-1 h-4 w-4" />
                  2022
                </div>
                <h3 className="text-2xl font-bold">Recognition</h3>
                <p className="text-muted-foreground">
                  Our chapter received the "Outstanding University Chapter" award from the United Nations Association of
                  Ethiopia, recognizing our innovative programs, community impact, and commitment to advancing the
                  Sustainable Development Goals on campus and beyond.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974"
                  alt="Award ceremony for UNA-ET AASTU Chapter"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Present Day */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-xl md:aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070"
                  alt="Current members of UNA-ET AASTU Chapter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center rounded-md bg-un-blue/10 px-3 py-1 text-sm font-medium text-un-blue">
                  <Users className="mr-1 h-4 w-4" />
                  Present Day
                </div>
                <h3 className="text-2xl font-bold">Today</h3>
                <p className="text-muted-foreground">
                  Today, our chapter boasts over 200 active members and runs multiple initiatives focused on the
                  Sustainable Development Goals, human rights, environmental sustainability, and global citizenship
                  education. We continue to grow our impact both on campus and in the wider community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
