import { Category } from '@/types'
import Link from 'next/link'

interface CategoryShowcaseProps {
  categories: Category[]
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="group relative aspect-[4/5] bg-secondary rounded-lg overflow-hidden"
        >
          {category.metadata.featured_image && (
            <img
              src={`${category.metadata.featured_image.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
              alt={category.metadata.category_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {category.metadata.category_name}
            </h3>
            {category.metadata.description && (
              <p className="text-sm text-white/80">
                {category.metadata.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}