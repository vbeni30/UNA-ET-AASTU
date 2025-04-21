import { InitiativeHero } from "@/components/initiatives/initiative-hero"
import { InitiativeDetails } from "@/components/initiatives/initiative-details"

export default function SdgHackathonPage() {
  const initiativeData = {
    title: "SDG Hackathon",
    subtitle: "Innovative solutions for sustainable development",
    description:
      "We plan to organize an SDG-centered hackathon, encouraging students to develop innovative solutions to challenges such as clean energy, water sanitation, and climate action. This project will bridge students' engineering expertise with UNA-ET's goals of advancing sustainable development.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
    content: [
      {
        title: "About the Hackathon",
        text: "The SDG Hackathon is a multi-day event where students from various departments at AASTU will form interdisciplinary teams to develop innovative solutions to challenges related to the UN's Sustainable Development Goals. Focusing particularly on clean energy, water sanitation, and climate action, this hackathon will leverage the technical expertise of our engineering students while promoting awareness of global sustainability challenges.",
      },
      {
        title: "Goals and Objectives",
        text: "The primary goal of the SDG Hackathon is to encourage innovation and problem-solving in the context of sustainable development. By bringing together students from different disciplines, we aim to foster collaboration and the exchange of ideas. The hackathon will also raise awareness about the SDGs and their importance in addressing global challenges.",
      },
      {
        title: "Format and Structure",
        text: "The hackathon will be structured as a 48-hour event, with teams of 3-5 students working together to develop prototypes, applications, or detailed proposals for solutions to specific challenges. Mentors from faculty, industry partners, and NGOs will be available to guide teams throughout the process. At the end of the hackathon, teams will present their solutions to a panel of judges, with prizes awarded for the most innovative and impactful ideas.",
      },
    ],
    badges: ["SDG 6: Clean Water", "SDG 7: Clean Energy", "SDG 13: Climate Action"],
    relatedInitiatives: [
      { name: "Environmental Awareness Campaign", link: "/initiatives/environmental-awareness" },
      { name: "Model UN Conference", link: "/initiatives/model-un" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <InitiativeHero title={initiativeData.title} subtitle={initiativeData.subtitle} image={initiativeData.image} />
      <InitiativeDetails
        description={initiativeData.description}
        content={initiativeData.content}
        badges={initiativeData.badges}
        relatedInitiatives={initiativeData.relatedInitiatives}
      />
    </div>
  )
}
