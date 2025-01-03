import { MdRoofing, MdOutlineCleaningServices } from "react-icons/md"
import { SlEnergy } from "react-icons/sl";
import Link from "next/link"
import Image from "next/image"

const cards = [
  {
    name: 'Roofing & Exterior Services',
    description: 'We specialize in roof repairs, re-roofs, exterior cleaning, and driveway cleaning. Our services are reliable and efficient.',
    icon: MdRoofing,
  },
  {
    name: 'Cleaning Services',
    description: 'We offer a range of cleaning services for your home or business, including pressure washing, gutter cleaning, and more.',
    icon: MdOutlineCleaningServices,
  },
  {
    name: 'Loft Insulation & Energy Efficiency',
    description: 'We offer loft insulation and energy-saving services to help you reduce energy costs and keep your home warm in winter and cool in summer.',
    icon: SlEnergy,
  },
];


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-[-5rem]">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Our Services</h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          We offer a variety of services including roofing repairs, cleaning, insulation, and more. Take a look below!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-full mt-16">
          <Link
            href="/services"
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  )
}
