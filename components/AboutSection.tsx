import Image from "next/image";
import rooferImage from "../public/images/roofer.jpg";
import cleanerImage from "../public/images/cleaner.webp";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 mt-[-5rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Roofing Section */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start mb-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:mr-12 text-center lg:text-left">
            <p className="text-base font-semibold text-indigo-600">About Us</p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900">
              Professional Roofing Contractors Coventry
            </h1>
            <h3 className="mt-8 text-lg font-medium text-gray-500">
              Looking for expert roofing services in Coventry? Look no further! Our team of experienced roofers provides top-quality roof installation, repairs, and maintenance for homes and businesses throughout Coventry and the surrounding areas.
            </h3>
          </div>
          <Image
            src={rooferImage}
            alt="Roofer"
            className="mt-12 lg:mt-0 lg:ml-20 lg:w-[500px] rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
            width={300}
            height={300}
          />
        </div>

        {/* Exterior Cleaners Section */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <Image
            src={cleanerImage}
            alt="Exterior Cleaners"
            className="mt-12 lg:mt-0 lg:mr-12 lg:w-[500px] rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
            width={300}
            height={300}
          />
          <div className="mx-auto max-w-2xl lg:mx-0 lg:ml-12 text-center lg:text-left">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900">
              Trusted Exterior Cleaners Coventry
            </h2>
            <h3 className="mt-8 text-lg font-medium text-gray-500">
              Keep your property looking its best with our professional exterior cleaning services in Coventry. Our skilled team specializes in cleaning roofs, driveways, facades, and gutters, ensuring a spotless appearance and protecting your investment. Using advanced techniques and eco-friendly products, we deliver exceptional results for residential and commercial properties alike.
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}
