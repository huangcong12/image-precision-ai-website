import Link from 'next/link';
import {getAllPosts} from '@/app/lib/blog';

export default async function Home() {
    // Get latest 3 blog posts
    const posts = await getAllPosts();
    const latestPosts = posts.slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-shopify-primary to-shopify-primary/80 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Product Images with AI</h1>
                    <p className="text-xl mb-10 max-w-3xl mx-auto">
                        One-click image enhancement and background removal for Shopify stores. Boost conversions with
                        professional product photos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://apps.shopify.com/image-precision-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-shopify-secondary text-white hover:bg-shopify-secondary/90 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Install on Shopify
                        </a>
                        <Link
                            href="/features"
                            className="border border-white text-white hover:bg-white hover:text-shopify-primary font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            See Features
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-shopify-primary">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-shopify-gray-light">
                            <div className="text-shopify-secondary text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-bold mb-2 text-shopify-primary">One-Click Image Enhancement</h3>
                            <p className="text-shopify-gray-dark">
                                Transform blurry, low-quality supplier photos into crisp, professional product images
                                instantly.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-shopify-gray-light">
                            <div className="text-shopify-secondary text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold mb-2 text-shopify-primary">Smart Background Removal</h3>
                            <p className="text-shopify-gray-dark">
                                Remove backgrounds with perfect edge detection to make your products stand out on any
                                background.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-shopify-gray-light">
                            <div className="text-shopify-secondary text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold mb-2 text-shopify-primary">Bulk Processing</h3>
                            <p className="text-shopify-gray-dark">
                                Save time by processing multiple product images at once while maintaining consistent
                                quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            {latestPosts.length > 0 && (
                <section className="py-20 bg-shopify-gray-light">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold text-shopify-primary">Latest Articles</h2>
                            <Link
                                href="/blog"
                                className="text-shopify-primary hover:text-shopify-secondary font-medium transition-colors duration-200"
                            >
                                View All Articles →
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {latestPosts.map(post => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-shopify-gray-light"
                                >
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-shopify-primary">{post.frontMatter.title}</h3>
                                        <p className="text-shopify-gray-dark mb-4">{post.frontMatter.description}</p>
                                        <p className="text-sm text-shopify-gray-medium">
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
            <section className="py-20 bg-shopify-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Product Images?</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto">
                        Install AI Product Image Enhancer - LC today and get professional-quality product photos in seconds.
                    </p>
                    <a
                        href="https://apps.shopify.com/image-precision-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-shopify-secondary text-white hover:bg-shopify-secondary/90 font-bold py-3 px-6 rounded-lg inline-block transition-colors duration-200"
                    >
                        Get Started Now
                    </a>
                </div>
            </section>
        </div>
    );
}
