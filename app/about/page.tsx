import { StarIcon } from '@heroicons/react/24/solid'
import drivewayCleaning from '@/public/images/driveway-cleaning.jpg'
import exteriorCleaning from '@/public/images/exterior-cleaning.jpg'
import roofRepair from '@/public/images/roof-repair.webp'
import happyCustomer from '@/public/images/happy-customer.jpg'
import Link from 'next/link'
import Image from 'next/image'

const testimonials = {
    average: 5,
    totalCount: 1,
    counts: [
      { rating: 5, count: 1 },
    ],
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsarah.clarke.7777%2Fposts%2Fpfbid02wHDaVTA2kvVyLYGsZyS1uoZR7pqEUfJVpEX9PDzR7yeNohUy1JAHjL4CWDAQegSHl&show_text=true&width=500"
            width="100%" 
            height="300" 
            style="border:none;overflow:hidden" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        `,
        author: 'Sarah Clarke',
      },
      {
        id: 2,
        rating: 5,
        content: `
          <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flaura.harper.129357%2Fposts%2Fpfbid02c6FumJHuapC61ZxTBfmzNAjnG2LiB4NmgfMueogRz87KLb9RR2fDmJq5tmnRWV8Wl&show_text=true&width=500"
              width="100%" 
              height="300"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        `,
        author: 'Laura Turner',
      },
      {
        id: 3,
        rating: 5,
        content: `
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkeri.rose1%2Fposts%2Fpfbid02EcwBeH3qPPHHJcURXgeMgeq1LEZ9be4kewc5YAaNjZuBR2HLAfBxQQmWe3cz45ySl&show_text=true&width=500"
              width="100%"
              height="250"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        `,
        author: 'Keri Rose',
      },
      {
        id: 4,
        rating: 5,
        content: `
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fangela.spokes%2Fposts%2Fpfbid0EodyC8GoxbjxvPogCpBukrG1GJzn3PZm5MhaU13TUyCSEA9z3kBKnfTuWCwMk7Aal&show_text=true&width=500"
          width="100%"
          height="250"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `,
        author: 'Angela Spokes',
      },
      {
        id: 5,
        rating: 5,
        content: `
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcheryl.brennan.5099%2Fposts%2Fpfbid0R8z4L5BGNFidTHqLAZsVKNMzwi5MLKtkwuwEBTi57kas98yGQWRS33xwJcPFedPgl&show_text=true&width=500"
          width="500"
          height="250"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `,
        author: 'Cheryl Brennan',
      },
      {
        id: 6,
        rating: 5,
        content: `
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjade.bullock.16%2Fposts%2Fpfbid02wLw1p3jfqkyMkZ7DYxdXww6Qq8sx1ojCfRvPMZjGQAUTKKGvYDChAedVTSHFnJkyl&show_text=true&width=500"
          width="500"
          height="250"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `,
        author: 'Jade Bullock',
      }
    ],
  };

const team = [
  {
    name: 'Shane Dowey',
    role: 'Director',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

export default function Example() {

  return (
    <div className="bg-white">

      <main className="isolate">
    {/* Hero section */}
    <div className="relative isolate -z-10">
        <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
            <defs>
            <pattern
                x="50%"
                y={-1}
                id="roofing-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
            >
                <path d="M.5 200V.5H200" fill="none" />
            </pattern>
            </defs>
            <rect fill="url(#roofing-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-44 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                {/* Text Content */}
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Your Trusted Roofing & Exterior Cleaning Experts
                </h1>
                <p className="mt-8 text-lg font-medium text-gray-700 sm:max-w-md sm:text-xl lg:max-w-none">
                    With over 10 years of experience, we specialize in roof repairs, re-roofs, and exterior cleaning. 
                    Affordable, fast, and reliable services backed by up to 15 years of warranty. 
                    No upfront payments—only pay when you’re 100% satisfied.
                </p>
                <div className="mt-8 flex gap-4">
                    <Link
                    href="/services"
                    className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow hover:bg-indigo-700"
                    >
                    View Our Services
                    </Link>
                    <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-gray-300 px-5 py-3 text-base font-semibold text-gray-900 shadow hover:bg-gray-400"
                    >
                    Get a Free Quote
                    </Link>
                </div>
                </div>
                {/* Image Gallery */}
                <div className="mt-14 flex justify-end gap-8 sm:justify-start lg:mt-0 lg:pl-16">
                <div className="w-44 flex-none space-y-8">
                    <div className="relative">
                    <Image
                        alt="Roof Repair"
                        src={roofRepair}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                    <Image
                        alt="Exterior Cleaning"
                        src={exteriorCleaning}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                </div>
                <div className="w-44 flex-none space-y-8">
                    <div className="relative">
                    <Image
                        alt="Driveway Cleaning"
                        src={drivewayCleaning}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                    <Image
                        alt="Satisfied Customer"
                        src={happyCustomer}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>


    {/* Content section */}
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            {/* Mission Statement */}
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl text-gray-700">
                Our mission is to provide top-quality roofing repairs, re-roofs, and exterior cleaning services that are reliable, affordable, and exceed customer expectations. We pride ourselves on our 5-star reviews, 15-year warranty on all re-roofs, and our commitment to ensuring every customer is satisfied before we leave the job site.
                </p>
                <p className="mt-8 max-w-xl text-lg text-gray-600">
                We believe that a happy customer means a happy business. With over 10 years of experience as a family-run company, we offer fast and efficient services with no upfront payments required. Whether it&apos;s roof cleaning, driveway pressure washing, or loft insulation, we&apos;re here to help improve the look and value of your home.
                </p>
                <div className="mt-8">
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>15-year warranty on all re-roofs</li>
                    <li>10-year warranty on felt roofs</li>
                    <li>25% off driveway cleaning packages</li>
                    <li>25% off loft insulation for seniors (60+)</li>
                </ul>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                {[
                    { label: 'Years of Experience', value: '10+' },
                    { label: 'Happy Customers', value: '5-Star Reviews' },
                    { label: 'Warranty on Re-Roofs', value: '15 Years' },
                    { label: 'Special Discounts', value: '25% Off' },
                ].map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-2">
                    <dt className="text-base text-gray-600">{stat.label}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                    </dd>
                    </div>
                ))}
                </dl>
            </div>
            </div>
        </div>
    </div>


    {/* Image section */}
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
        alt=""
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
    </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Our Values
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                We are guided by a set of core values that shape everything we do. These values ensure we provide the best service possible and stay committed to excellence, integrity, and customer satisfaction.
                </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {[
                { name: 'Integrity', description: 'We operate with honesty and transparency, always doing the right thing for our clients, even when no one is watching.' },
                { name: 'Customer Satisfaction', description: 'We strive to exceed expectations, delivering high-quality work and ensuring every customer is happy with our service.' },
                { name: 'Reliability', description: 'We believe in being dependable, showing up on time, and completing every job to the highest standard without delay.' },
                { name: 'Excellence', description: 'We set ourselves apart by delivering outstanding craftsmanship and attention to detail in every project.' },
                { name: 'Teamwork', description: 'We value collaboration, working together to achieve the best possible outcomes for our clients.' },
                { name: 'Sustainability', description: 'We are committed to reducing our environmental impact and promoting eco-friendly practices in all our services.' }
                ].map((value) => (
                <div key={value.name}>
                    <dt className="font-semibold text-gray-900">{value.name}</dt>
                    <dd className="mt-1 text-gray-600">{value.description}</dd>
                </div>
                ))}
            </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our team</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="mx-auto h-24 w-24 rounded-full" />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials section */}
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Customer Testimonials
                </h2>
                <div className="mt-12 grid gap-16 lg:grid-cols-2">
                {testimonials.featured.map((testimonial) => (
                    <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        {/* Star Rating */}
                        <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                            key={index}
                            className="h-5 w-5 text-yellow-500"
                            aria-hidden="true"
                            />
                        ))}
                        </div>
                    </div>
                    <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{ __html: testimonial.content }}
                    />
                    <p className="mt-4 text-lg font-medium text-gray-800">
                        — {testimonial.author}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>



      </main>

    </div>
  )
}
