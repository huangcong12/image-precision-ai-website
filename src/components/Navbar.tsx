import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-shopify-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-shopify-primary">PhotoFixer & BG Remover</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/" 
                className="border-transparent text-shopify-gray-dark hover:border-shopify-secondary hover:text-shopify-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/features" 
                className="border-transparent text-shopify-gray-dark hover:border-shopify-secondary hover:text-shopify-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="border-transparent text-shopify-gray-dark hover:border-shopify-secondary hover:text-shopify-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link 
                href="/blog" 
                className="border-transparent text-shopify-gray-dark hover:border-shopify-secondary hover:text-shopify-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a 
              href="https://apps.shopify.com/image-precision-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-shopify-secondary hover:bg-shopify-primary transition-colors duration-200"
            >
              Install on Shopify
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}