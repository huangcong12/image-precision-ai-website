import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
  };
}

export const metadata = {
  title: 'Blog | PhotoFixer & BG Remover',
  description: 'Learn about product image optimization, AI enhancement, and background removal techniques for your Shopify store.',
  openGraph: {
    title: 'Blog | PhotoFixer & BG Remover',
    description: 'Learn about product image optimization, AI enhancement, and background removal techniques for your Shopify store.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | PhotoFixer & BG Remover',
    description: 'Learn about product image optimization, AI enhancement, and background removal techniques for your Shopify store.',
  },
};

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDirectory);
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        frontMatter: {
          title: data.title,
          date: data.date,
          description: data.description,
          tags: data.tags
        }
      };
    })
    .sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Learn about product image optimization, AI enhancement, and background removal techniques for your Shopify store.
        </p>
      </header>
      
      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block p-6">
              <h2 className="text-2xl font-bold mb-2">{post.frontMatter.title}</h2>
              <p className="text-gray-500 mb-2">
                {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-600 mb-4">{post.frontMatter.description}</p>
              {post.frontMatter.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.frontMatter.tags.map((tag: string) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 