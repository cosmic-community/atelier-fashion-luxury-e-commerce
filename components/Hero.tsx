export default function Hero() {
  return (
    <section className="relative h-[600px] bg-secondary overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2400&h=1200&fit=crop&auto=format"
          alt="Luxury Fashion"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Elevate Your Style
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover exclusive designer pieces and timeless fashion essentials curated for the discerning individual
          </p>
          <button className="px-8 py-4 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  )
}