"use client";
import Image from "next/image";
import React from "react";
import shopingSale from "../../assets/images/Shopping Sale.png";
import CheckIcon from "@/assets/icons/checkIcon";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";

interface BulletPoint {
  point: string;
}

const Homepage = () => {
  const router = useRouter();

  const Bulletpoints: BulletPoint[] = [
    {
      point: "Reach Millions of Shoppers",
    },
    {
      point: "Easy Product Listing",
    },
    {
      point: "Secure and Fast Payments",
    },
    {
      point: "Boost Your Visibility",
    },
  ];

  return (
    <div className=" w-full px-[32px] space-y-40">
      <div className=" space-y-6">
        <div>
          <Image src={shopingSale} alt="Shopping Sale Image" />
        </div>
        <div className=" text-center space-y-2">
          <p className="text-4xl font-bold">Welcome</p>
          <p className="text-[14px] leading-[18px] font-normal">
            The safest platform to shop from social media vendors
          </p>
        </div>
        <div className=" border-[#8A226F] border-[0.5px] bg-[#FFEAFA] py-3 px-4 space-y-2 rounded-xl">
          {Bulletpoints.map((bullet, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon />
              <p>{bullet.point}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <CustomButton
          type="button"
          variant="primary"
          text="Get started"
          onClick={() => {
            router.push("/sign-up");
          }}
        />
      </div>
    </div>
  );
};

export default Homepage;
