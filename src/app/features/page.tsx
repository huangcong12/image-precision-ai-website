import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";

export const metadata = {
    title: 'Features | AI Product Image Enhancer - LC - Shopify Image Enhancement',
    description: 'Learn how AI Product Image Enhancer - LC enhances your Shopify product images with one-click enhancement, background removal, and bulk processing.',
    keywords: 'product image enhancement, shopify background removal, ai image editor, bulk image processing, ecommerce photo editor'
};

export default function FeaturesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-12 text-center text-shopify-primary">AI Product Image Enhancer - LC
                Features</h1>

            <div className="max-w-4xl mx-auto space-y-16">
                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-shopify-primary">One-Click Image Enhancement</h2>
                        <p className="text-shopify-gray-dark mb-4">
                            AI Product Image Enhancer - LC uses advanced artificial intelligence to instantly enhance
                            low-quality product images.
                            Whether you have low-resolution supplier photos or smartphone pictures, our AI can:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-shopify-gray-dark">
                            <li>Enhance detail and sharpness</li>
                            <li>Optimize colors and contrast</li>
                            <li>Reduce noise and imperfections</li>
                            <li>Improve overall clarity and professional appearance</li>
                        </ul>
                    </div>
                    <div
                        className="bg-shopify-gray-light h-64 rounded-lg flex items-center justify-center border border-shopify-gray-light">
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage
                                src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/portrait-img-before.ChNbbNGW.png?v=1746088472"
                                srcSet="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/portrait-img-before.ChNbbNGW.png?v=1746088472"
                                alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage
                                src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/portrait-img-after.lcpbtT00.png?v=1746088473"
                                srcSet="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/portrait-img-after.lcpbtT00.png?v=1746088473"

                                alt="Image two"/>}
                        />
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                    <div className="md:order-2">
                        <h2 className="text-2xl font-bold mb-4 text-shopify-primary">Smart Background Removal</h2>
                        <p className="text-shopify-gray-dark mb-4">
                            Creating clean, professional white background images is crucial for your store. Our
                            background removal tool:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-shopify-gray-dark">
                            <li>Precisely detects product edges</li>
                            <li>Perfectly handles complex edges like hair, jewelry, and fabric</li>
                            <li>Preserves product shadows and textures</li>
                            <li>Provides transparent background options for further editing</li>
                        </ul>
                    </div>
                    <div className="h-64 flex items-center justify-center">
                        <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage
                                src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/0aa9ec45-571d-4096-bf04-1d91a0528a14-image.png?v=1743226559"
                                srcSet="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/0aa9ec45-571d-4096-bf04-1d91a0528a14-image.png?v=1743226559"
                                alt="Image one"/>}
                            itemTwo={<ReactCompareSliderImage
                                src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/footwear-5408643_1920.jpg?v=1728378019"
                                srcSet="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/footwear-5408643_1920.jpg?v=1728378019"
                                alt="Image two"/>}
                        />
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-shopify-primary">Bulk Processing</h2>
                        <p className="text-shopify-gray-dark mb-4">
                            Save valuable time by processing multiple product images at once:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-shopify-gray-dark">
                            <li>Select multiple images for processing</li>
                            <li>Apply the same enhancement parameters across product lines</li>
                            <li>Maintain consistent image style throughout your store</li>
                            <li>Process directly from your Shopify admin, no additional software needed</li>
                        </ul>
                    </div>
                    <div
                        className="bg-shopify-gray-light h-64 rounded-lg flex items-center justify-center border border-shopify-gray-light">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/2025-05-01_16-48.png?v=1746089335"
                            alt="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/2025-05-01_16-48.png?v=1746089335"/>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                    <div className="md:order-2">
                        <h2 className="text-2xl font-bold mb-4 text-shopify-primary">Seamless Shopify Integration</h2>
                        <p className="text-shopify-gray-dark mb-4">
                            Our app integrates fully with your Shopify admin:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-shopify-gray-dark">
                            <li>Use directly within your Shopify admin panel</li>
                            <li>Save processed images directly to your product library</li>
                            <li>Simple, intuitive interface with no learning curve</li>
                            <li>Works with all Shopify plan levels</li>
                        </ul>
                    </div>
                    <div
                        className="bg-shopify-gray-light h-64 rounded-lg flex items-center justify-center md:order-1 border border-shopify-gray-light">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/d8c96eb9edd935700a67bc9c4b2e2986.png?v=1746091192"
                            alt="https://cdn.shopify.com/s/files/1/0625/1518/3754/files/d8c96eb9edd935700a67bc9c4b2e2986.png?v=1746091192"/>
                    </div>
                </section>
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-shopify-primary">Ready to enhance your product images?</h2>
                <a
                    href="https://apps.shopify.com/image-precision-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-shopify-secondary text-white hover:bg-shopify-primary font-bold py-3 px-6 rounded-lg mt-4 transition-colors duration-200"
                >
                    Install App Now
                </a>
            </div>
        </div>
    );
}