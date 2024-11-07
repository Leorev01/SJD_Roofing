import { FaPhone, FaPoundSign } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";

const stats = [
    { id: 1, name: 'Competitive Pricing', icon: <FaPoundSign /> },
    { id: 2, name: 'Fully Insured', icon: <GiRibbonMedal /> },
    { id: 3, name: 'Quick Responses', icon: <FaPhone /> },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-900 py-12 relative mt-[-5rem] place-self-center rounded-lg">
        <div className="mx-auto w-fit max-w-5xl px-6 lg:px-8"> {/* Reduced max width */}
          <dl className="grid grid-cols-1 gap-y-16 text-center md:grid-cols-3 gap-x-12 lg:gap-x-20"> {/* Adjusted grid */}
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-row gap-x-4">
                <span className="bg-white font-black text-6xl rounded-full p-4 w-fit">{stat.icon}</span>
                <h1 className="text-3xl font-semibold tracking-tight text-white self-center">
                  {stat.name}
                </h1>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  