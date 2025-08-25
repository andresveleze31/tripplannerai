"use client";
import React, { useEffect, useState } from "react";
import ChatBox from "./_components/ChatBox";
import Itinerary from "./_components/Itinerary";
import { useTripDetail } from "../provider";
import GlobalMap from "./_components/GlobalMap";
import { Button } from "@/components/ui/button";
import { Globe2, Plane } from "lucide-react";

const CreateNewTrip = () => {
  //@ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail();

  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    setTripDetailInfo(null);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:p-10">
      <div>
        <ChatBox />
      </div>
      <div className="col-span-2 relative">
        {activeIndex == 0 ? <Itinerary /> : <GlobalMap />}
        <Button
          onClick={() => setActiveIndex(activeIndex==0 ? 1 : 0)}
          size={"lg"}
          className="absolute bottom-10 left-[50%] "
        >
          {activeIndex == 0 ? <Plane /> : <Globe2 />}
        </Button>
      </div>
    </div>
  );
};

export default CreateNewTrip;
