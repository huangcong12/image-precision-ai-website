export const metadata = {
  title: 'Features | PhotoFixer & BG Remover - Shopify Image Enhancement',
  description: 'Learn how PhotoFixer & BG Remover enhances your Shopify product images with one-click enhancement, background removal, and bulk processing.',
  keywords: 'product image enhancement, shopify background removal, ai image editor, bulk image processing, ecommerce photo editor'
};

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">PhotoFixer & BG Remover Features</h1>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">One-Click Image Enhancement</h2>
            <p className="text-gray-600 mb-4">
              PhotoFixer & BG Remover uses advanced artificial intelligence to instantly enhance low-quality product images.
              Whether you have low-resolution supplier photos or smartphone pictures, our AI can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Enhance detail and sharpness</li>
              <li>Optimize colors and contrast</li>
              <li>Reduce noise and imperfections</li>
              <li>Improve overall clarity and professional appearance</li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Image enhancement demo
          </div>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-2xl font-bold mb-4">Smart Background Removal</h2>
            <p className="text-gray-600 mb-4">
              Creating clean, professional white background images is crucial for your store. Our background removal tool:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Precisely detects product edges</li>
              <li>Perfectly handles complex edges like hair, jewelry, and fabric</li>
              <li>Preserves product shadows and textures</li>
              <li>Provides transparent background options for further editing</li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center md:order-1">
            Background removal demo
          </div>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Bulk Processing</h2>
            <p className="text-gray-600 mb-4">
              Save valuable time by processing multiple product images at once:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Select multiple images for processing</li>
              <li>Apply the same enhancement parameters across product lines</li>
              <li>Maintain consistent image style throughout your store</li>
              <li>Process directly from your Shopify admin, no additional software needed</li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Bulk processing demo
          </div>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-2xl font-bold mb-4">Seamless Shopify Integration</h2>
            <p className="text-gray-600 mb-4">
              Our app integrates fully with your Shopify admin:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use directly within your Shopify admin panel</li>
              <li>Save processed images directly to your product library</li>
              <li>Simple, intuitive interface with no learning curve</li>
              <li>Works with all Shopify plan levels</li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center md:order-1">
            Shopify integration demo
          </div>
        </section>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to enhance your product images?</h2>
        <a
          href="https://apps.shopify.com/photofixer-bg-remover"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-lg mt-4"
        >
          Install App Now
        </a>
      </div>
    </div>
  );
} 