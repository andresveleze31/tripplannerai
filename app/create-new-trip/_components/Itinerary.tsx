"use client";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import {
  ArrowLeft,
  Clock,
  ExternalLinkIcon,
  Star,
  Ticket,
  Timer,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
import { useTripDetail } from "@/app/provider";
import { TripInfo } from "./ChatBox";
import { div } from "motion/react-client";

const Itinerary = () => {
  //@ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail();
  const [tripData, setTripData] = useState<TripInfo | null>(null);

  useEffect(() => {
    tripDetailInfo && setTripData(tripDetailInfo);
  }, [tripDetailInfo]);

  const data = tripData
    ? [
        {
          title: "Recommended Hotels",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tripData?.hotels.map((hotel, index) => (
                <HotelCardItem hotel={hotel} />
              ))}
            </div>
          ),
        },
        ...tripData?.itinerary.map((dayData) => ({
          title: `Day ${dayData?.day}`,
          content: (
            <div>
              <p>Best Time: {dayData?.best_time_to_visit_day}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayData?.activities.map((activity, index) => (
                  <PlaceCardItem activity={activity} />
                ))}
              </div>
            </div>
          ),
        })),
      ]
    : [];
  return (
    <div className="relative w-full h-[85vh] overflow-auto ">
      {/* @ts-ignore  */}
      {tripData ? (
        <Timeline data={data} tripData={tripData} />
      ) : (
        <div>
          <h2 className="flex gap-2 text-3xl text-white items-center absolute bottom-20 left-20 font-bold">
            <ArrowLeft /> Getting to know you to build perfect trip here...
          </h2>

          <Image
            src={"/travel.png"}
            alt="travel"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      )}
    </div>
  );
};

export default Itinerary;
