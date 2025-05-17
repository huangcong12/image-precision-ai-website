export const metadata = {
  title: 'Pricing | AI Product Image Enhancer - LC - Shopify Image Enhancement',
  description: 'Simple, transparent pay-per-use pricing for AI Product Image Enhancer - LC. No subscriptions or hidden fees.',
  keywords: 'shopify image enhancement pricing, product image AI cost, background removal price, image optimization fees'
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-shopify-primary">Simple, Transparent Pricing</h1>
      <p className="text-xl text-shopify-gray-dark mb-12 text-center max-w-3xl mx-auto">
        We offer a pay-as-you-go model. Only pay for the images you process, with no monthly fees or hidden costs.
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-shopify-gray-light">
          <div className="bg-shopify-primary text-white p-6 text-center">
            <h2 className="text-2xl font-bold">Pay-Per-Use Plan</h2>
            <p className="mt-2">Free installation, pay only for what you use</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-shopify-primary">Image Enhancement</h3>
              <p className="text-3xl font-bold text-shopify-secondary mb-2">$0.10 <span className="text-lg text-shopify-gray-dark font-normal">/ per image</span></p>
              <p className="text-shopify-gray-dark">Use our AI technology to enhance image quality, sharpness, and clarity</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-shopify-primary">Background Removal</h3>
              <p className="text-3xl font-bold text-shopify-secondary mb-2">$0.08 <span className="text-lg text-shopify-gray-dark font-normal">/ per image</span></p>
              <p className="text-shopify-gray-dark">Smart background removal with perfect edge detection for professional product photos</p>
            </div>
            
            <div className="border-t border-shopify-gray-light pt-6 mt-6">
              <h3 className="text-lg font-bold mb-4 text-shopify-primary">All Plans Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-shopify-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-shopify-gray-dark">No subscription, pay only for what you use</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-shopify-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-shopify-gray-dark">$1 free trial credit on installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-shopify-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-shopify-gray-dark">Free technical support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-shopify-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-shopify-gray-dark">Cancel anytime, no long-term commitment</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-shopify-gray-light p-8 text-center">
            <a
              href="https://apps.shopify.com/image-precision-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-shopify-secondary text-white hover:bg-shopify-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Install Now
            </a>
            <p className="text-shopify-gray-dark mt-4">Free installation, pay only when you use the service</p>
          </div>
        </div>
        
        <div className="mt-12 bg-shopify-secondary/10 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2 text-shopify-primary">Enterprise Solutions</h3>
          <p className="text-shopify-gray-dark mb-4">
            If you need to process large volumes of images or require custom features, contact us for a tailored enterprise plan.
          </p>
          <a
            href="mailto:huangcong12@gmail.com"
            className="text-shopify-primary hover:text-shopify-secondary font-medium transition-colors duration-200"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </div>
  );
}