import { IconWorld } from "@tabler/icons-react";
import { LeafyGreenIcon, Shield, ShieldAlertIcon, ShieldCheckIcon } from "lucide-react";
import React from "react";

const Icons = () => {
  return (
    <div className="px-4 md:px-15 my-10 grid md:grid-cols-4 gap-10">
      <div className="border-l-4 border-l-black p-7">
        <p className="text-primary uppercase text-lg">Travel Your Way</p>
        <h2 className="text-4xl">Celebrating 40 Years of Adventure Travel</h2>
      </div>
      <div className="p-7">
        <div className="flex justify-center">
          <ShieldCheckIcon className="text-primary  size-12" />
        </div>
        <p className="text-xl mt-4">Trusted</p>
        <p className="text-gray-500 text-lg mt-4">
          40 years of operating; fully bonded and your money 100% protected.
        </p>
      </div>
      <div className="p-7">
        <div className="flex justify-center">
          <IconWorld className="text-primary  size-12" />
        </div>
        <p className="text-xl mt-4">Worldwide</p>
        <p className="text-gray-500 text-lg mt-4">
          400 Guided Group and Self-Guided adventures in 100 countries.
        </p>
      </div>
      <div className="p-7">
        <div className="flex justify-center">
          <LeafyGreenIcon className="text-primary  size-12" />
        </div>
        <p className="text-xl mt-4">Sustainable</p>
        <p className="text-gray-500 text-lg mt-4">
          100% carbon absorption. Caring for the environment and local
          communities.
        </p>
      </div>
    </div>
  );
};

export default Icons;
