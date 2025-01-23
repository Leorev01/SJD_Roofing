'use client'
// Reviews.tsx
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
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
       <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falex.riordan.9%2Fposts%2Fpfbid0AyYnP82b8PvjHjUmHvZdKrKTvwgTekhDB4D93T5rSdh921Y6FVsrqa9b4NBqmyPil&show_text=true&width=500"
       width="500"
       height="168"
       style="border:none;overflow:hidden"
       scrolling="no"
       frameborder="0"
       allowfullscreen="true"
       allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    },
    {
      id: 2,
      rating: 5,
      content: `
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falex.riordan.9%2Fposts%2Fpfbid0AyYnP82b8PvjHjUmHvZdKrKTvwgTekhDB4D93T5rSdh921Y6FVsrqa9b4NBqmyPil&show_text=true&width=500"
       width="500"
       height="168"
       style="border:none;overflow:hidden"
       scrolling="no"
       frameborder="0"
       allowfullscreen="true"
       allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
    },
    {
      id: 3,
      rating: 5,
      content: `
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmegan.broomfield.94%2Fposts%2Fpfbid02wwhm41i521S8M3gkxnZ372ZbEGYJAqF6yNc3U6vMb1yQtkgMAFaWST1DM73FSSwyl&show_text=true&width=500"
        width="100%"
        height="226"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    },
    {
      id: 4,
      rating: 5,
      content: `
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdanny.davis.77398%2Fposts%2Fpfbid02WmkyMabDZKfKuMmB1tNu9JwrpRtTDG3Bsa61gUDv7hWK11P7osHXTmjB7yB8hJWol&show_text=true&width=500"
        width="100%"
        height="187"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
      `,
      author: 'Danny Davis',
    },
    {
      id: 5,
      rating: 5,
      content: `
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjakerankine%2Fposts%2Fpfbid02giw9UgN7zcRrjGByzbfnE8nnepfpLL4oeVsqKJrBbtaJd6tfrg6s5K66Lj7DbeY5l&show_text=true&width=500"
          width="100%"
          height="168"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      `,
      author: 'Jake Rankine',
    },
    
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerSlide = 1

  const nextSlide = () => {
    if (currentIndex + reviewsPerSlide < reviews.featured.length) {
      setCurrentIndex((prevIndex) => prevIndex + reviewsPerSlide)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - reviewsPerSlide)
    }
  }

  return (
    <div className="bg-white py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Customers Love Us</h1>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 overflow-hidden">
          {reviews.featured.slice(currentIndex, currentIndex + reviewsPerSlide).map((review) => (
            <div key={review.id} className="p-6 bg-gray-100 border rounded-lg w-full sm:w-full lg:w-1/2 min-h-[400px]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                <div className="mt-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5'
                      )}
                    />
                  ))}
                </div>
              </div>
              {/* Wrapper for the iframe and overlay */}
              <div className="relative">
                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="text-base italic text-gray-600 max-w-full"
                />
                {/* Overlay to make iframe unclickable */}
                <div className="absolute inset-0 bg-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-md"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-md"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
