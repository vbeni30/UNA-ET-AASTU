import type { Metadata } from "next"
import { EmbassiesContent } from "@/components/partnerships/embassies-content"

export const metadata: Metadata = {
  title: "Embassy Partners | UNA-ET AASTU",
  description:
    "Our partnerships with embassies in Ethiopia to promote international cooperation and cultural exchange.",
}

export default function EmbassiesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://flagcdn.com/w1280/et.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Embassy Partners</h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                Collaborating with diplomatic missions to create global opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      <EmbassiesContent />
    </main>
  )
}
