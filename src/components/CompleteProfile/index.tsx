import GoogleIcon from "@/assets/icons/goggleIcon";
import InstagramIcon from "@/assets/icons/instagramIcon";
import TiktokIcon from "@/assets/icons/tiktokIcon";
import React from "react";

const ProfileSetup = () => {
  const SocialIcons = [
    { icon: <InstagramIcon /> },
    { icon: <TiktokIcon /> },
    { icon: <GoogleIcon /> },
  ];
  return (
    <div className=" text-left space-y-4">
      <p className="text-[#000000E5] font-medium text-[24px] leading-6">
        Complete profile setup
      </p>
      <p className="text-sm font-normal text-[#00000099]">
        Connect your socials for quick setup
      </p>
      <div
        className=" flex items-center justify-center gap-3
      "
      >
        {SocialIcons.map((icon, index) => (
          <span
            className="bg-[#00000008] py-[10px] px-10 rounded-xl cursor-pointer"
            key={index}
          >
            {icon.icon}
          </span>
        ))}
      </div>
      <div className=" space-y-3">
        <p className="text-sm font-normal text-[#00000099]">
          Or enter manually
        </p>
        <form action="" className=" space-y-3">
          <input
            type="text"
            className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033] text-bold"
            placeholder="Full name"
          />
          <input
            type="text"
            placeholder="Username"
            className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
          />
          <input
            type="number"
            className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
            placeholder="Phone number"
          />
          <input
            type="email"
            className="py-3 px-2 rounded-xl border-[0.5px] border-[#00000033] text-[#00000033] w-full !focus:border-[#00000033]"
            placeholder="Email"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
