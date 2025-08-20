export function HeroSection() {
  const services = [
    "Salões de Beleza",
    "Barbearias",
    "Manicure & Nail Designer",
    "Esteticistas",
    "Sobrancelhas & Cílios",
    "Spa & Massagem",
    "Make Up",
    "Saúde & Bem-estar",
    "Mais...",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-barbershop.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading">
          Descubra e reserve profissionais de beleza e bem-estar perto de você
        </h2>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {services.map((service, index) => (
            <button
              key={index}
              className="text-sm md:text-base text-white hover:text-amber-200 transition-colors border-b border-transparent hover:border-amber-200 pb-1"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
