export default function Example() {
    return (
      <div className="relative isolate bg-gray-900 w-full max-w-3xl mx-auto rounded-lg p-4">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="relative px-4 pt-6 pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Get a Quote</h2>
          </div>
          <form action="#" method="POST" className="px-4 pb-4">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone-number" className="block text-sm font-semibold text-white">
                  Phone number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                />
              </div>
  
              {/* Message Field */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
                  defaultValue={''}
                />
              </div>
  
              {/* Submit Button */}
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  