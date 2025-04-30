import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

// Generate static paths
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'Sorry, we could not find the article you requested'
    };
  }
  
  return {
    title: `${post.frontMatter.title} | PhotoFixer & BG Remover Blog`,
    description: post.frontMatter.description,
    keywords: post.frontMatter.tags?.join(', ') || 'product images, shopify, image optimization'
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <p className="text-gray-500 mb-2">
          {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
        </p>
        <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
        <p className="text-xl text-gray-600">{post.frontMatter.description}</p>
        
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
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
} 