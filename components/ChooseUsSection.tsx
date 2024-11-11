// ChooseUs.tsx
import { GiRibbonMedal } from 'react-icons/gi'
import { MdOutlineHealthAndSafety, MdAccessTime } from 'react-icons/md'

const incentives = [
  {
    name: 'Quality Materials',
    imageSrc: GiRibbonMedal,
    description: 'The best quality materials and products at an affordable price.',
  },
  {
    name: '10-year Warranty',
    imageSrc: MdOutlineHealthAndSafety,
    description: "We're so confident in our work that we offer a 10-year warranty.",
  },
  {
    name: 'Quick Response Time',
    imageSrc: MdAccessTime,
    description: "We'll be there in a jiffy. We're so fast you'll think we're the Flash.",
  },
]

export default function WhyChooseUs() {
  return (
    <div className="bg-white py-24">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
        Why Choose Us?
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <div className="flex justify-center mb-6">
                <incentive.imageSrc className="h-16 w-16" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{incentive.name}</h3>
              <p className="mt-4 text-gray-500">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
