import React, { useEffect, useState } from "react";
import { Trip } from "../page";
import Image from "next/image";
import { ArrowBigRightIcon } from "lucide-react";
import axios from "axios";
import Link from "next/link";

type Props = {
  trip: Trip;
};

const MyTripCardItem = ({ trip }: Props) => {
  const [photoUrl, setPhotoUrl] = useState<string>();

  useEffect(() => {
    trip && GetGooglePlaceDetail();
  }, [trip]);

  const GetGooglePlaceDetail = async () => {
    const result = await axios.post("/api/google-place-detail", {
      placeName: trip?.tripDetail?.destination
    });

    if (result?.data?.e) {
      return;
    }
    console.log(result);
    setPhotoUrl(result?.data);
  };

  return (
    <Link href={"/view-trips/"+trip?.tripId} className="p-3 shadow rounded-2xl">
      <Image
        src={photoUrl ? photoUrl : "/placeholder.jpg"}
        alt={trip.tripId}
        width={400}
        height={400}
        className="rounded-xl object-cover w-full h-[270px] "
      />
      <h2 className="flex gap-2 font-semibold text-xl mt-2">
        {trip?.tripDetail?.origin} <ArrowBigRightIcon />{" "}
        {trip?.tripDetail?.destination}
      </h2>
      <h2 className="mt-2 text-gray-500">
        {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget
      </h2>
    </Link>
  );
};

export default MyTripCardItem;
