"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Facebook, Mail, Phone } from "lucide-react";
import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  
];

const Header = () => {
  const { user } = useUser();
  const path = usePathname();

  return (
    <div className="py-2">
      <div className="hidden md:grid grid-cols-3 items-center bg-black px-15 py-2">
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-2 text-white hover:text-red-500">
            <Phone />
            (00) 2348 1874
          </p>
          <p className="flex items-center gap-2 text-white hover:text-red-500">
            <Mail />
            aitriplanner@email.com
          </p>
        </div>

        <div className="flex-1">
          <p className="text-white text-center">
            Save up to $500 when you book by June.{" "}
            <span className="text-primary">Detail</span>
          </p>
        </div>

        <div className="flex gap-5 justify-end">
          <IconBrandFacebook className="text-white" />
          <IconBrandInstagram className="text-white" />
          <IconBrandTwitter className="text-white" />
          <IconBrandWhatsapp className="text-white" />
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-4 md:px-15">
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
          <h2 className="font-bold text-2xl">AI Trip Planner</h2>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {menuOptions.map((menu, index) => (
            <Link href={menu.path}>
              <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            {path == "/create-new-trip" ? (
              <Link href={"/my-trips"}>
                <Button>My Trips</Button>
              </Link>
            ) : (
              <Link href={"/create-new-trip"}>
                <Button>Create New Trip</Button>
              </Link>
            )}

            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Header;
