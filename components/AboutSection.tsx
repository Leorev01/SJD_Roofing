import Image from "next/image";
import rooferImage from "../public/images/roofer.jpg";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 mt-[-5rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:mr-12">
          <p className="text-base/7 font-semibold text-indigo-600">About Us</p>
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900">Professional Roofing Contractors</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
            Looking for expert roofing services in Coventry? Look no further! Our team of experienced roofers provides top-quality roof installation, repairs, and maintenance for homes and businesses throughout Coventry and the surrounding areas.
            </p>
          </div>
          <Image
            src={rooferImage}
            alt="Roofer"
            className="mt-12 lg:mt-0 lg:ml-20 lg:w-[80rem]  rounded-lg hover:shadow-lg transform hover:scale-105 duration-500 ease-in-out"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
