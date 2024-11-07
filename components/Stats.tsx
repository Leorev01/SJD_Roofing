const stats = [
    { id: 1, name: 'Years in business', value: '10+' },
    { id: 2, name: 'Happy Clients', value: '1000+' },
    { id: 3, name: 'Projects Completed', value: '1000+' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-900 py-24 w-[80vw] mx-[10vw]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  