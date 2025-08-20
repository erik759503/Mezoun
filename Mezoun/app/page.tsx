import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CitySection } from "@/components/city-section"
import { RecommendationsSection } from "@/components/recommendations-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CitySection />
      <RecommendationsSection />
    </main>
  )
}
