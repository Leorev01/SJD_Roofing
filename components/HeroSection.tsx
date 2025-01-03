// HeroSection.tsx
import Image from 'next/image'
import roofImage from '../public/images/roof3.jpeg';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden py-20">
      <div className="absolute inset-0">
        <Image 
          src={roofImage} // Your image path
          alt="Roofing and Exterior Cleaning Services"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center z-10">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-4">
          Protect Your Home With Coventry's Best Roofing & Cleaning Service Experts
        </h2>
        <h2 className="text-lg sm:text-xl mb-8">
          High-quality roofing repairs, exterior cleaning, and more in Coventry. Trusted by hundreds of happy clients.
        </h2>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 text-lg font-medium rounded-md shadow-lg transition-transform transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  )
}
