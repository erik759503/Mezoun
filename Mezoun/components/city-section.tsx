import Link from "next/link"

export function CitySection() {
  const cities = [
    { name: "Florianópolis", col: 1 },
    { name: "Joinville", col: 2 },
    { name: "Betim", col: 3 },
    { name: "São Bernardo do Campo", col: 4 },
    { name: "Brasília", col: 1 },
    { name: "São Bento do Sul", col: 2, href: "/barbearias/sao-bento-do-sul" },
    { name: "Campinas", col: 3 },
    { name: "Sorocaba", col: 4 },
    { name: "Belo Horizonte", col: 1 },
    { name: "Santo André", col: 2 },
    { name: "Recife", col: 3 },
    { name: "Ribeirão Preto", col: 4 },
    { name: "São Paulo", col: 1 },
    { name: "Fortaleza", col: 2 },
    { name: "Porto Alegre", col: 3 },
    { name: "Curitiba", col: 4 },
    { name: "Manaus", col: 1 },
    { name: "Salvador", col: 2 },
    { name: "Osasco", col: 3 },
    { name: "Rio de Janeiro", col: 4 },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-gray-900">
          Encontre o seu especialista do Booksy por cidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) =>
            city.href ? (
              <Link
                key={index}
                href={city.href}
                className="text-left p-4 hover:bg-muted rounded-lg transition-colors text-gray-700 hover:text-primary block"
              >
                {city.name}
              </Link>
            ) : (
              <button
                key={index}
                className="text-left p-4 hover:bg-muted rounded-lg transition-colors text-gray-700 hover:text-primary"
              >
                {city.name}
              </button>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
