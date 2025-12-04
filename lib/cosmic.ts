import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch all products with category data
export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch products')
  }
}

// Fetch single product by slug
export async function getProduct(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch product')
  }
}

// Fetch all categories
export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

// Fetch products by category
export async function getProductsByCategory(categoryId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'products',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch products by category')
  }
}

// Fetch all orders
export async function getOrders() {
  try {
    const response = await cosmic.objects
      .find({ type: 'orders' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    // Sort by order date (newest first)
    const orders = response.objects.sort((a: any, b: any) => {
      const dateA = new Date(a.metadata?.order_date || '').getTime()
      const dateB = new Date(b.metadata?.order_date || '').getTime()
      return dateB - dateA
    })
    
    return orders
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch orders')
  }
}