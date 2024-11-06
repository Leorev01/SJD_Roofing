import Image from 'next/image';
import roofImage from '../public/images/roof3.jpeg';
import Link from 'next/link';

export default function TitlePage() {
  return (
    <>
      <div className="relative w-full h-[45rem]">
        <Image
          src={roofImage}
          alt="Roof"
          className="object-cover w-full h-full opacity-60"
        />
        {/* Container to align the header and button */}
        <div className="absolute inset-0 flex flex-col items-start top-1/4 pl-6 md:pl-20 space-y-4 z-10">
          <h1 className="text-5xl font-bold text-black text-left">
            Coventry&apos;s Best Roofers and Exterior Cleaners
          </h1>
          <h1 className='text-black font-bold'>Coventry Roofers</h1>
          <h1 className='text-black font-bold'>Coventry Exterior Cleaners</h1>
          <Link
          href='/contact'
            type="button"
            className="flex items-center space-x-2 rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700"
          >
            <span>Get a FREE Quote</span>
          </Link>
        </div>
      </div>
    </>
  );
}
