// Type definitions for Cosmic CMS objects

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

export interface Product extends CosmicObject {
  type: 'products'
  metadata: {
    product_name: string
    description: string
    price: number
    product_images?: Array<{
      url: string
      imgix_url: string
    }>
    sizes_available?: string[]
    colors_available?: string[]
    category?: Category
    in_stock: boolean
  }
}

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    category_name: string
    description?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
  }
}

export interface Order extends CosmicObject {
  type: 'orders'
  metadata: {
    customer_name: string
    customer_email: string
    customer_phone?: string
    shipping_address: string
    order_items: Array<{
      product: string
      quantity: number
      size?: string
      color?: string
      price: number
    }>
    order_total: number
    order_status: {
      key: string
      value: string
    }
    order_date: string
  }
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}