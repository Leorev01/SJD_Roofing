import Image from 'next/image';
import roofImage from '../public/images/roof3.jpeg';

export default function TitlePage() {
  return (
    <>
      <div className="relative w-full h-[30rem]">
        <Image
          src={roofImage}
          alt="Roof"
          className="object-cover w-full h-full opacity-60"
        />
        {/* Container to align the header and button */}
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-6 md:pl-20 space-y-4 z-10">
          <h1 className="text-5xl font-bold text-black text-left">
            Leicester&apos;s Finest Roofers
          </h1>
          <p className='text-black font-bold'>Contact our helpline for more information</p>
          <button
            type="button"
            className="flex items-center space-x-2 rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>01234 567 890</span>
          </button>
        </div>
      </div>
    </>
  );
}
