import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";
import { LocationEditIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-footer py-20 px-4 md:px-0">
        <div className="md:w-1/2 mt-3 mx-auto mb-96 ">
          <h1 className="text-5xl text-center ">
            Ready to Explore? Let's Chat About Your Dream Trip
          </h1>
          <p className="text-gray-500 mt-5 text-lg text-center">
            Let your wanderlust soar. Start exploring today and let
            unforgettable experiences await!
          </p>
          <Link className="flex justify-center mt-5" href={"/create-new-trip"}>
            <Button>Plan your trip</Button>
          </Link>
        </div>
      </div>
      <div className="bg-black grid md:grid-cols-5 gap-10 pb-10 px-4 md:px-64 ">
        <div>
          <p className="uppercase text-white">Contact us</p>
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-white flex gap-2">
              <Mail className="text-white" />
              aitriplanner@email.com
            </p>
            <p className="text-white flex gap-2">
              <Phone className="text-white" />
              (00) 238 9836
            </p>
            <p className="text-white flex gap-2">
              <LocationEditIcon className="text-white" />
              351 Humberto Plaza, West Ashtynstead, Ohio - 12551, Canada{" "}
            </p>
            <Button className="rounded-full">Downlaod Brouchure</Button>
          </div>
        </div>
        <div>
          <p className="uppercase text-white">Destinations</p>
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-white">Singapore</p>
            <p className="text-white">Thailand</p>
            <p className="text-white">Australia</p>
            <p className="text-white">Sri lanka</p>
            <p className="text-white">Norway</p>
            <p className="text-white">Canada</p>
            <p className="text-white">Sweden</p>
          </div>
        </div>
        <div>
          <p className="uppercase text-white">Company</p>
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-white">About us</p>
            <p className="text-white">Carrer</p>
            <p className="text-white">Blog</p>
            <p className="text-white">Partner</p>
            <p className="text-white">Contact</p>
            <p className="text-white">Terms & policies</p>
            <p className="text-white">Trust Center</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="uppercase text-white">Stay in touch</p>
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-white">
              Subscribe to our Newsletter for the Latest Updates and Special
              Offers
            </p>
            <Input
              type="email"
              className="bg-white"
              placeholder="Enter your email"
            />
            <p className="uppercase text-white">Follow us</p>
            <div className="flex gap-5 ">
              <IconBrandFacebook className="text-white" />
              <IconBrandInstagram className="text-white" />
              <IconBrandTwitter className="text-white" />
              <IconBrandWhatsapp className="text-white" />
            </div>
            <p className="uppercase text-white">Accepted Payment Types</p>
            <Image
              src={"/payments.svg"}
              width={200}
              height={100}
              alt="payments"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
