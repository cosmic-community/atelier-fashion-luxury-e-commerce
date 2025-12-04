// app/products/[slug]/page.tsx
import { getProduct, getProducts } from '@/lib/cosmic'
import { Product } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const mainImage = product.metadata.product_images?.[0]
  const additionalImages = product.metadata.product_images?.slice(1) || []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-8 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {mainImage && (
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src={`${mainImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {additionalImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {additionalImages.map((image, index) => (
                <div key={index} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                    alt={`${product.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">{product.metadata.product_name}</h1>
            {product.metadata.category && (
              <p className="text-sm text-gray-600">
                {product.metadata.category.metadata.category_name}
              </p>
            )}
          </div>

          <div className="text-3xl font-bold text-accent">
            ${product.metadata.price.toLocaleString()}
          </div>

          <div 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: product.metadata.description }}
          />

          {product.metadata.sizes_available && product.metadata.sizes_available.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-primary mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.metadata.sizes_available.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-primary transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.metadata.colors_available && product.metadata.colors_available.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-primary mb-3">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.metadata.colors_available.map((color) => (
                  <span
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:border-primary transition-colors"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Availability:</span>
              <span className={`text-sm font-medium ${product.metadata.in_stock ? 'text-green-600' : 'text-red-600'}`}>
                {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}