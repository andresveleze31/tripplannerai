import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react'

const Review = () => {
  return (
    <div className=" bg-curved py-20 px-4 md:px-0">
      <h2 className="text-4xl text-center">Our Happy Traveller</h2>

      <div className="flex gap-2 items-center justify-center mt-20">
        <IconStarFilled className="size-6 text-primary" />
        <IconStarFilled className="size-6 text-primary" />
        <IconStarFilled className="size-6 text-primary" />
        <IconStarFilled className="size-6 text-primary" />
        <IconStarFilled className="size-6 text-primary" />
      </div>

      <h3 className="text-2xl text-center mt-5">Fantastic in every way</h3>
      <div className=" md:w-1/2 mt-3 mx-auto">
        <h3 className="md:text-2xl text-center text-gray-500">
          "After attempting other tours with other agencies and them falling
          through, I came in to this with doubts, but turns out... this was the
          best vacation I ever went on. All arrangements were made smoothly, the
          travel book"
        </h3>
      </div>

      <div className="flex justify-center mt-5 gap-5">
        <Image src={"/face.png"} width={50} height={20} alt="Ceo Image" />
        <div>
          <p className="text-center">John Doe</p>
          <p className="text-gray-500 text-center">CEO, AITriplanner</p>
        </div>
      </div>
    </div>
  );
}

export default Review
