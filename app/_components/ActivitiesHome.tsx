import Image from 'next/image';
import React from 'react'

const ActivitiesHome = () => {
  return (
    <div className="px-4 md:px-15 my-20 grid md:grid-cols-5 gap-10 place-items-center">
      <div className="border-l-4 border-l-black px-7 flex flex-col justify-center">
        <p className="text-primary uppercase text-lg">Travel Your Way</p>
        <h2 className="text-4xl">Explorer Activities</h2>
      </div>
      <div className="relative w-64 h-64 rounded-full overflow-hidden">
        <Image alt="Act" src="/city1.webp" fill className="object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xl font-semibold">City Tours</span>
        </div>
      </div>

      <div className="relative w-64 h-64 rounded-full overflow-hidden">
        <Image alt="Act" src="/city2.webp" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xl font-semibold">
            Outdoor Activites
          </span>
        </div>
      </div>

      <div className="relative w-64 h-64 rounded-full overflow-hidden">
        <Image alt="Act" src="/city3.webp" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xl font-semibold">
            Food Experiences
          </span>
        </div>
      </div>

      <div className="relative w-64 h-64 rounded-full overflow-hidden">
        <Image alt="Act" src="/city4.webp" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xl font-semibold">Little Travesy</span>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesHome
