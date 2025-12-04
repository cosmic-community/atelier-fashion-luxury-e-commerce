import { getOrders } from '@/lib/cosmic'
import { Order } from '@/types'
import OrderCard from '@/components/OrderCard'
import Link from 'next/link'

export default async function OrdersPage() {
  const orders = await getOrders() as Order[]

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
        <h1 className="text-4xl font-bold text-primary mb-4">Orders</h1>
        <p className="text-lg text-gray-600">
          View and manage customer orders
        </p>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-secondary rounded-lg">
          <p className="text-gray-600">No orders found.</p>
        </div>
      )}
    </div>
  )
}