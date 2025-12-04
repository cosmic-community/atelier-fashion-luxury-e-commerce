import { Order } from '@/types'

interface OrderCardProps {
  order: Order
}

export default function OrderCard({ order }: OrderCardProps) {
  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  }

  const statusColor = statusColors[order.metadata.order_status.key] || 'bg-gray-100 text-gray-800'

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-1">{order.title}</h3>
          <p className="text-sm text-gray-600">
            {new Date(order.metadata.order_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {order.metadata.order_status.value}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Customer Information</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <p>{order.metadata.customer_name}</p>
            <p>{order.metadata.customer_email}</p>
            {order.metadata.customer_phone && <p>{order.metadata.customer_phone}</p>}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Shipping Address</h4>
          <p className="text-sm text-gray-600 whitespace-pre-line">
            {order.metadata.shipping_address}
          </p>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="text-sm font-semibold text-primary mb-3">Order Items</h4>
        <div className="space-y-2">
          {order.metadata.order_items.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div>
                <span className="text-gray-900">{item.product}</span>
                <span className="text-gray-500 ml-2">× {item.quantity}</span>
                {item.size && <span className="text-gray-500 ml-2">Size: {item.size}</span>}
                {item.color && <span className="text-gray-500 ml-2">Color: {item.color}</span>}
              </div>
              <span className="font-medium text-gray-900">
                ${item.price.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t mt-4 pt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-primary">Total</span>
        <span className="text-2xl font-bold text-accent">
          ${order.metadata.order_total.toLocaleString()}
        </span>
      </div>
    </div>
  )
}