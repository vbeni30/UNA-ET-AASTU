import { GetInvolvedHero } from "@/components/get-involved/get-involved-hero"
import { GetInvolvedOptions } from "@/components/get-involved/get-involved-options"
import { ContactForm } from "@/components/get-involved/contact-form"
import { WhyGetInvolved } from "@/components/get-involved/why-get-involved"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GetInvolvedHero />
      <GetInvolvedOptions />
      <ContactForm />
      <WhyGetInvolved />
    </div>
  )
}

