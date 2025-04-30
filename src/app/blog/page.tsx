import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | PhotoFixer & BG Remover - Shopify Product Image Tips',
  description: 'Learn about product image optimization, background removal, and conversion rate improvement for your Shopify store.',
  keywords: 'shopify product images, ecommerce photography, product image tips, background removal guide, image optimization for conversion'
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Articles</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
              </p>
              <h2 className="text-xl font-bold mb-2">{post.frontMatter.title}</h2>
              <p className="text-gray-600">{post.frontMatter.description}</p>
              
              {post.frontMatter.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.frontMatter.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 