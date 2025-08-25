"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { ArrowDown, Globe2, Landmark, Plane, SendIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Inspire me where to go",
    icon: <Plane className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Discover Hidden gems",
    icon: <Landmark className="text-orange-500 h-5 w-5" />,
  },
  {
    title: "Adventure Destination",
    icon: <Globe2 className="text-yellow-600 h-5 w-5" />,
  },
];

const Hero = () => {
  const { user } = useUser();

  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }

    router.push("/create-new-trip");
  };

  return (
    <div className="mt-0  flex flex-col items-center justify-center">
      <div className="bg-home px-4 pt-20 pb-20 md:pt-52 md:pb-72 w-full bg-cover bg-center flex justify-center">
        <div className="max-w-3xl w-full text-center space-y-6  ">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hey, I´m your personal{" "}
            <span className="text-primary">Trip Planner</span>
          </h1>
          <p className="text-lg text-white">
            Tell me what you want, and I'll handle the rest: Flights, Hotels,
            trip Planning - all in seconds
          </p>
          <div>
            <div className="border rounded-2xl p-4 bg-white/50 relative">
              <Textarea
                className="w-full h-28  border-none focus-visible:ring-0 shadow-none resize-none"
                placeholder="Create a trip for Paris from New York"
              />
              <Button
                size={"icon"}
                className="absolute bottom-6 right-6"
                onClick={() => onSend()}
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            {suggestions.map((suggestions, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white"
              >
                {suggestions.icon}
                <h2 className="text-xs text-white">{suggestions.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 items-center justify-center">
        <h2 className="my-7 mt-14 flex gap-2 text-center">
          Not sure where to start? <strong>See how it works</strong>{" "}
          <ArrowDown />
        </h2>

        <HeroVideoDialog
          className="block dark:hidden "
          animationStyle="from-center"
          videoSrc="https://youtu.be/WjwsX7vpEu8"
          thumbnailSrc="/ai.jpg"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>
    </div>
  );
};

export default Hero;
