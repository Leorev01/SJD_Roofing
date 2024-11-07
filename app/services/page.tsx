import { FaCheck } from "react-icons/fa";

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
    <>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-indigo-600">What We Offer</p>
          <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Our Services</h2>
        </div>
      </div>
      
      <div className="flex justify-evenly w-full py-8 text-gray-900">
        {/* Roofing Services */}
        <div className="text-left space-y-3 w-1/3">
          <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-4 pb-2 border-b-4 border-indigo-500">
            Roofing
          </h1>
          {roofing.map((roof, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheck className="text-green-500" aria-hidden="true" />
              <p>{roof}</p>
            </div>
          ))}
        </div>

        {/* Cleaning Services */}
        <div className="text-left space-y-3 w-1/3">
          <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-4 pb-2 border-b-4 border-indigo-500">
            Cleaning
          </h1>
          {cleaning.map((clean, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheck className="text-green-500" aria-hidden="true" />
              <p>{clean}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
