import { Product } from '@/types'
import Link from 'next/link'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products available.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const mainImage = product.metadata.product_images?.[0]
        
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden mb-4">
              {mainImage ? (
                <img
                  src={`${mainImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                  alt={product.metadata.product_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              {product.metadata.category && (
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {product.metadata.category.metadata.category_name}
                </p>
              )}
              <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {product.metadata.product_name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-accent">
                  ${product.metadata.price.toLocaleString()}
                </p>
                {!product.metadata.in_stock && (
                  <span className="text-xs text-red-600 font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}