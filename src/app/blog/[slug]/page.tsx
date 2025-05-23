import {notFound} from 'next/navigation';
import {format} from 'date-fns';
import {getPostBySlug, renderMarkdown, getAllPosts} from '@/app/lib/blog';
import { Metadata } from 'next';

type Props = {
    params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    
    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }
    
    return {
        title: `${post.frontMatter.title} | PhotoFixer Blog`,
        description: post.frontMatter.description,
        keywords: post.frontMatter.tags?.join(', '),
        openGraph: {
            title: post.frontMatter.title,
            description: post.frontMatter.description,
            type: 'article',
            publishedTime: post.frontMatter.date,
            tags: post.frontMatter.tags
        }
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({params}: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const contentHtml = await renderMarkdown(post.content);

    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="mb-8 border-b pb-6 border-shopify-gray-light">
                <p className="text-shopify-gray-dark mb-2">
                    {format(new Date(post.frontMatter.date), 'MMMM d, yyyy')}
                </p>
                <h1 className="text-4xl font-bold mb-4 text-shopify-primary">
                    {post.frontMatter.title}
                </h1>
                <p className="text-xl text-shopify-gray-medium">
                    {post.frontMatter.description}
                </p>

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

            <div
                className="prose prose-lg max-w-none prose-headings:text-shopify-primary prose-a:text-shopify-primary prose-a:underline hover:prose-a:text-shopify-secondary"
                dangerouslySetInnerHTML={{__html: contentHtml}}
            />
        </article>
    );
}