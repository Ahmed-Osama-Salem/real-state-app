import Navbar from "@/Components/Home/Navbar";
import TopOffers from "@/Components/Home/TopOffers/TopOffers";
import Image from "next/image";
import heroImage from "@/assets/hero_ads.png";
export default function Home() {
  return (
    <div>
      <section className="w-screen h-screen bg-[#002E5D] flex lg:px-[144px] px-[20px] items-center">
        <Navbar />
        <section className="flex flex-col md:flex-row justify-between gap-4 w-full items-center">
          <div>
            <h1 className="text-[48px] font-bold text-white">
              Start Investing
            </h1>

            <span className="text-[48px] font-bold text-white mr-2">with</span>
            <span className="text-[48px] font-bold text-[#F3D42D]">
              Confidence
            </span>
            <p className="text-[16px] text-white mt-4 w-[85%]">
              Explore top real estate opportunities or get personalized guidance
              from our experts.
            </p>
          </div>
          <Image src={heroImage.src} width={640} height={505} alt="hero" />
        </section>
      </section>
      <TopOffers />
    </div>
  );
}
