import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | PhotoFixer & BG Remover',
  description: 'Learn about product image optimization, AI enhancement, and background removal techniques for your Shopify store.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.frontMatter.title}</h2>
            <p className="text-gray-500 mb-2">
              {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
            </p>
            <p className="text-gray-600 mb-4">{post.frontMatter.description}</p>
            
            {post.frontMatter.tags && (
              <div className="flex flex-wrap gap-2">
                {post.frontMatter.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
} 