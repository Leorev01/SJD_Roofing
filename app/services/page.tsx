import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { BsFillHouseDoorFill, BsFillDropletFill } from "react-icons/bs";

const roofing = [
  'Roof Repairs',
  'Roof Cleaning',
  'Roof Sealing',
  'Gutter Replacements',
  'Chimney Repointing',
  'Fascia and Soffits Sealing',
  'Dry Verge System',
  'Dry Ridge System',
  'Render Repairs',
  'Ridge Replacements',
  'EPDM Flat Roofs',
  'Much More...'
];

const cleaning = [
  'Roof Cleaning',
  'Sealing Roofs',
  'Fascia/Gutter Cleaning',
  'Window Cleaning',
  'Re-sealing / Re-sanding',
  'Render Cleaning',
  'Restore Tarmac Drives',
  'Concrete Cleaning',
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center px-4">
        <p className="text-base font-semibold text-indigo-600">What We Offer</p>
        <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Providing high-quality roofing and cleaning solutions to enhance your home&apos;s durability and appearance.
        </p>
      </div>

      {/* Service Lists */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 px-4">
        {/* Roofing Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
          <div className="flex items-center justify-center">
            <BsFillHouseDoorFill className="text-indigo-500 text-4xl mb-4" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 pb-2 border-b-4 border-indigo-500">
            Roofing
          </h3>
          {roofing.map((roof, index) => (
            <div key={index} className="flex items-center space-x-2 py-1">
              <FaCheck className="text-green-500" aria-hidden="true" />
              <p>{roof}</p>
            </div>
          ))}
        </div>

        {/* Cleaning Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
          <div className="flex items-center justify-center">
            <BsFillDropletFill className="text-blue-500 text-4xl mb-4" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4 pb-2 border-b-4 border-blue-500">
            Cleaning
          </h3>
          {cleaning.map((clean, index) => (
            <div key={index} className="flex items-center space-x-2 py-1">
              <FaCheck className="text-green-500" aria-hidden="true" />
              <p>{clean}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button for Free Quote */}
      <div className="flex justify-center py-10">
        <Link
          href='/contact'
          className="inline-flex items-center space-x-3 rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          <span>Get a FREE Quote</span>
        </Link>
      </div>
    </section>
  );
}

export default Services;
