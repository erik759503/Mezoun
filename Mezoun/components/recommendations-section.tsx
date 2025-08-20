import { Card, CardContent } from "@/components/ui/card"

export function RecommendationsSection() {
  const recommendations = [
    {
      image: "/modern-hair-salon.png",
      title: "Salão Premium",
      rating: 4.8,
      reviews: 156,
      location: "Centro, São Paulo",
    },
    {
      image: "/professional-barbershop.png",
      title: "Barbearia Clássica",
      rating: 4.9,
      reviews: 203,
      location: "Ipanema, Rio de Janeiro",
    },
    {
      image: "/placeholder-1li1j.png",
      title: "Nail Studio",
      rating: 4.7,
      reviews: 89,
      location: "Vila Madalena, São Paulo",
    },
    {
      image: "/spa-massage-room-relaxing.png",
      title: "Spa Relaxante",
      rating: 4.8,
      reviews: 124,
      location: "Barra da Tijuca, Rio de Janeiro",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-heading text-gray-900">Recomendado para você</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium ml-1">{item.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({item.reviews} avaliações)</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
