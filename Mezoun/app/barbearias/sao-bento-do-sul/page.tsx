import { Header } from "@/components/header"
import { BarbershopList } from "@/components/barbershop-list"

export default function SaoBentoDoSulPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Barbearias em São Bento do Sul (10)</h1>
          <BarbershopList />
        </div>
      </div>
    </main>
  )
}
