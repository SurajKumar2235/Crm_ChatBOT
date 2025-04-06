import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content-container">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Zoho CRM</h1>
            <p className="py-6">
              Streamline your sales, marketing, and customer support with Zoho CRM.
              Connect with customers, grow your business, and improve your bottom line.
            </p>
            <Link href="/dashboard" className="btn btn-primary mr-2">Get Started</Link>
            <Link href="/" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-base-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">Ready to transform your business?</h2>
            <p className="text-xl mb-6">Join thousands of companies using Zoho CRM to grow their business.</p>
            <div className="flex justify-center gap-4">
              <Link href="/register" className="btn btn-primary">Sign Up Now</Link>
              <Link href="/" className="btn btn-outline">Contact Sales</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}