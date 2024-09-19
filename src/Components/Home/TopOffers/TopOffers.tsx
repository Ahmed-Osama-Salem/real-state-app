import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

export default function TopOffers() {
  return (
    <section className="lg:px-[144px] px-[20px] w-full h-auto">
      <div className="mb-[32px] h-[76px] flex items-center ">
        <h3 className="text-[#00152B] text-[36px] font-bold">Offers we love</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5 mb-5 min-h-[30vh]">
        {properties.map((property, idx) => {
          return (
            <PropertyCard
              key={idx}
              content={property}
            />
          );
        })}
      </div>
    </section>
  );
}
