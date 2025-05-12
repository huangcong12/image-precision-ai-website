import Link from 'next/link';
import { format } from 'date-fns';
import {getAllPosts} from "@/app/lib/blog";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PhotoFixer Blog - AI Image Enhancement for Shopify',
  description: 'Expert tips and guides on using AI to enhance your Shopify product images and boost conversion rates.',
  keywords: 'shopify image enhancement, product photo AI, shopify photography tips, ecommerce image optimization',
};

export async function generateStaticParams() {
  return [];
}

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-shopify-primary">
        PhotoFixer Blog
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all border border-shopify-gray-light"
          >
            <div className="p-6">
              <p className="text-sm text-shopify-gray-dark mb-2">
                {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
              </p>
              <h2 className="text-xl font-bold mb-2 text-shopify-primary">
                {post.frontMatter.title}
              </h2>
              <p className="text-shopify-gray-medium">{post.frontMatter.description}</p>
              
              {post.frontMatter.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.frontMatter.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-shopify-secondary/10 text-shopify-secondary text-xs px-2 py-1 rounded-full"
                    >
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