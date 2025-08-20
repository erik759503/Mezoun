import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

const barbershops = [
  {
    id: 1,
    name: "Barbearia Ovelha Negra",
    address: "Rua Barão do Rio Branco, 567, Centro, São Bento do Sul",
    rating: 5.0,
    image: "/barbershop-1.jpg",
    services: [
      { name: "Corte tradicional", price: "R$ 45,00" },
      { name: "Corte + Barba", price: "R$ 65,00" },
      { name: "Barba Tradicional", price: "R$ 35,00" },
    ],
    recommended: true,
  },
  {
    id: 2,
    name: "Lions & Drums",
    address: "Rua João Pessoa, 234, Centro, São Bento do Sul",
    rating: 4.9,
    image: "/barbershop-2.jpg",
    services: [
      { name: "Corte e sobrancelha", price: "R$ 50,00" },
      { name: "Corte", price: "R$ 40,00" },
    ],
    recommended: false,
  },
  {
    id: 3,
    name: "House Barber",
    address: "Rua Expedicionário José Bonifácio, 123, Centro, São Bento do Sul",
    rating: 4.8,
    image: "/barbershop-3.jpg",
    services: [
      { name: "Corte/barba", price: "R$ 55,00" },
      { name: "Barba Tradicional", price: "R$ 30,00" },
      { name: "Barba Integral", price: "R$ 40,00" },
    ],
    recommended: true,
  },
  {
    id: 4,
    name: "Barbearia Belli (Unidade Cruzeiro)",
    address: "Rua Cruzeiro, 456, Cruzeiro, São Bento do Sul",
    rating: 4.7,
    image: "/barbershop-4.jpg",
    services: [
      { name: "Corte Básico", price: "R$ 35,00" },
      { name: "Corte Degradê", price: "R$ 42,00" },
      { name: "Corte degradê masculino", price: "R$ 45,00" },
    ],
    recommended: false,
  },
  {
    id: 5,
    name: "Old Mustache Barbearia",
    address: "Rua Marechal Deodoro, 789, Centro, São Bento do Sul",
    rating: 4.9,
    image: "/barbershop-5.jpg",
    services: [
      { name: "Corte Másc", price: "R$ 40,00" },
      { name: "Corte Navalhado/Sobrn", price: "R$ 48,00" },
      { name: "Corte Infantil (até 7 anos)", price: "R$ 35,00" },
    ],
    recommended: true,
  },
  {
    id: 6,
    name: "Barbearia New Black",
    address: "Rua XV de Novembro, 321, Centro, São Bento do Sul",
    rating: 4.6,
    image: "/barbershop-6.jpg",
    services: [
      { name: "Corte + sobrancelha na gilete", price: "R$ 50,00" },
      { name: "Corte", price: "R$ 40,00" },
      { name: "Cabelo masculino na tesoura", price: "R$ 35,00" },
    ],
    recommended: false,
  },
]

export function BarbershopList() {
  return (
    <div className="space-y-6">
      {barbershops.map((barbershop) => (
        <Card key={barbershop.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="lg:w-80 h-64 lg:h-auto relative">
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=320&query=${barbershop.name} barbershop interior`}
                  alt={barbershop.name}
                  className="w-full h-full object-cover"
                />
                {barbershop.recommended && (
                  <Badge className="absolute top-3 left-3 bg-amber-500 text-white">RECOMENDADO PELA BOOKSY</Badge>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{barbershop.name}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{barbershop.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{barbershop.address}</span>
                    </div>

                    <div className="space-y-2">
                      {barbershop.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm text-gray-700">{service.name}</span>
                          <span className="font-semibold text-gray-900">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking buttons */}
                  <div className="lg:w-32 space-y-2">
                    {barbershop.services.map((service, index) => (
                      <Button
                        key={index}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white text-xs py-2"
                        size="sm"
                      >
                        Agendar
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
