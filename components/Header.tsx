import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Atelier</span>
            <span className="text-sm text-accent font-medium">FASHION</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/orders" 
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Orders
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}