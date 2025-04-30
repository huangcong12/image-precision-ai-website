import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  // Get latest 3 blog posts
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Product Images with AI</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            One-click image enhancement and background removal for Shopify stores. Boost conversions with professional product photos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.shopify.com/photofixer-bg-remover"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg"
            >
              Install on Shopify
            </a>
            <Link
              href="/features"
              className="border border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-6 rounded-lg"
            >
              See Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">One-Click Image Enhancement</h3>
              <p className="text-gray-600">
                Transform blurry, low-quality supplier photos into crisp, professional product images instantly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Smart Background Removal</h3>
              <p className="text-gray-600">
                Remove backgrounds with perfect edge detection to make your products stand out on any background.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Bulk Processing</h3>
              <p className="text-gray-600">
                Save time by processing multiple product images at once while maintaining consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All Articles →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{post.frontMatter.title}</h3>
                    <p className="text-gray-600 mb-4">{post.frontMatter.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Product Images?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Install PhotoFixer & BG Remover today and get professional-quality product photos in seconds.
          </p>
          <a
            href="https://apps.shopify.com/photofixer-bg-remover"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
