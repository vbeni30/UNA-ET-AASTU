import { NewsHero } from "@/components/news/news-hero"
import { NewsGrid } from "@/components/news/news-grid"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NewsHero />
      <NewsGrid />
      <NewsletterSection />
    </div>
  )
}
