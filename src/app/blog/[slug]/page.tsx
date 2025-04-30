import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static paths
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDirectory);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, ''),
    }));
}

// Generate metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter } = matter(fileContents);
    
    return {
      title: `${frontMatter.title} | PhotoFixer & BG Remover Blog`,
      description: frontMatter.description,
      keywords: frontMatter.tags?.join(', ') || 'product images, shopify, image optimization',
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.description,
        type: 'article',
        publishedTime: frontMatter.date,
        authors: ['PhotoFixer Team'],
        tags: frontMatter.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: frontMatter.title,
        description: frontMatter.description,
      },
    };
  } catch (error) {
    return {
      title: 'Article Not Found',
      description: 'Sorry, we could not find the article you requested',
    };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContents);
    
    return (
      <article className="prose lg:prose-xl mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
          <div className="text-gray-500 mb-4">
            {new Date(frontMatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {frontMatter.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {frontMatter.tags.map((tag: string) => (
                <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
} 