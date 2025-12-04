import { getProducts, getCategories } from '@/lib/cosmic'
import { Product, Category } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import CategoryShowcase from '@/components/CategoryShowcase'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ])

  return (
    <div className="space-y-16 pb-16">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of luxury fashion pieces
          </p>
        </div>
        <CategoryShowcase categories={categories as Category[]} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of designer pieces
          </p>
        </div>
        <ProductGrid products={products as Product[]} />
      </section>
    </div>
  )
}