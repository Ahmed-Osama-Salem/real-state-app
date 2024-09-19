import React from "react";
import Image from "next/image";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  content: Property;
}
export default function PropertyCard({
  content: {
    Title,
    Location,
    unitStatus,
    DeliveryIn,
    DeveloperLogo,
    sliderImages,
    investmentStatus,
    Attributes,
    Price,
    AgentWhatsappNumber,
    AgentCallNumber,
    AgentEmail,
  },
}: PropertyCardProps) {
  return (
    <div className="w-full h-[530px] bg-white shadow-md shadow-gray-400/25 rounded-md">
      <div className="w-full h-[300px] bg-slate-400 relative p-5 rounded-md">
        <div className="bg-black/30 w-full absolute h-full z-10 top-0 left-0 rounded-md" />
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="property image"
          fill
          className="rounded-t-md"
        />
        <div className="absolute flex justify-between w-full left-0 top-3 z-20">
          <div className="bg-white py-1 px-2 ml-2 rounded-[20px] flex flex-row items-center gap-2">
            <p className="text-red-500 text-[12px]">{investmentStatus}</p>
          </div>
          <div className="flex items-center gap-2 pr-2">
            <button className="w-[24px] h-[24px] bg-white rounded-full"></button>
            <button className="w-[24px] h-[24px] bg-white rounded-full"></button>
          </div>
        </div>
        <div className="absolute flex justify-between w-full left-0 bottom-3 z-20">
          <div className="bg-white px-2 ml-2 rounded-[8px] flex flex-row items-center gap-2">
            <p className="text-red-500">Great investment</p>
          </div>
          <div className="pr-2">
            <p>Delivery in</p>
            <p className="text-right">{DeliveryIn}</p>
          </div>
        </div>
      </div>
      <div className="p-[16px]">
        <div className="flex justify-between">
          <h3 className="text-[#002E5D] font-bold">{Title}</h3>
          <div className="bg-[#00152B] py-1 px-2 ml-2 rounded-[20px] flex flex-row items-center gap-2">
            <p className="text-white text-[12px]">{unitStatus}</p>
          </div>
        </div>
        <p className="text-[#002E5D] font-normal text-[12px]">{Location}</p>
        <div className="flex justify-between gap-2 mt-2">
          <div className="w-[120px] h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <p className="text-[#1F3144] font-bold">{Attributes.Bedrooms}</p>
            <p className="text-[#8C96A0] text-[12px]">Bedrooms</p>
          </div>
          <div className="w-[120px] h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <p className="text-[#1F3144] font-bold">{Attributes.Bathrooms}</p>
            <p className="text-[#8C96A0] text-[12px]">Bathrooms</p>
          </div>

          <div className="w-[120px] h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <p className="text-[#1F3144] font-bold">{Attributes.Space}</p>
            <p className="text-[#8C96A0] text-[12px]">Space</p>
          </div>
        </div>
        <hr className="my-[16px]" />
        <div className="">
          <div>
            <span className="text-[#1F3144] text-[8px]">EGP</span>
            <span className="text-[#1F3144] text-[12px] ml-1">
              {Price.TotalPrice}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[#1F3144] text-[8px]">EGP</span>
            <span className="text-[#00152B] text-[14px] font-bold ml-1">
              {Price.monthlyInstallment} Monthly
            </span>
            <span className="text-[#8C96A0] text-[12px] font-bold ml-1">
              | {Price.yearsOfInstallment} years
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="h-[32px] w-[100px] bg-[#F1F5FA] text-[#002E5D] rounded-md mt-3">
            Mail
          </button>
          <button className="h-[32px] w-[100px] bg-[#F1F5FA] text-[#002E5D] rounded-md mt-3">
            Call
          </button>
          <button className="h-[32px] min-w-[100px] w-fit px-2 bg-[#F1F5FA] text-[#002E5D] rounded-md mt-3">
            Whats app
          </button>
        </div>
      </div>
    </div>
  );
}
