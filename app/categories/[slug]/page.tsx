// app/categories/[slug]/page.tsx
import { getCategories, getProductsByCategory } from '@/lib/cosmic'
import { Category, Product } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category: Category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const categories = await getCategories()
  const category = categories.find((cat: Category) => cat.slug === slug) as Category | undefined

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id) as Product[]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-8 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="mb-12">
        {category.metadata.featured_image && (
          <div className="aspect-[21/9] bg-secondary rounded-lg overflow-hidden mb-8">
            <img
              src={`${category.metadata.featured_image.imgix_url}?w=1400&h=600&fit=crop&auto=format,compress`}
              alt={category.metadata.category_name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {category.metadata.category_name}
          </h1>
          {category.metadata.description && (
            <p className="text-lg text-gray-600">
              {category.metadata.description}
            </p>
          )}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-gray-600">
          {products.length} {products.length === 1 ? 'product' : 'products'} in this category
        </p>
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}