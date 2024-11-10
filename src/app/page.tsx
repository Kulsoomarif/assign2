
import Image from "next/image";
import Body from "@/components/Body"
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
<main className="relative flex flex-col mx-auto  items-center justify-start">
  {/* Background images container */}
  <div className="h-auto max-w-full">
    <Image
      src="/cover"
      alt="background image 1"
      className="w-full h-auto object-cover sm:h-[500px] md:h-[600px] lg:h-[800px]"
    />
    {/* <img
      src="/cover2.jpg"
      alt="background image 2"
      className="w-full h-auto object-cover sm:h-[500px] md:h-[600px] lg:h-[800px]"
    /> */}
    <Image
      src="/bg2.webp"
      alt="background image 3"
      className="w-full h-auto object-cover sm:h-[500px] md:h-[600px] lg:h-[800px]"
    />
  </div>
  
{/* over lay content */}
        <div className="absolute inset-6 flex  flex-col items-center justify-center text-center text-black transform -translate-y-1/3 px-4 sm:px-8">
  <div className="mb-4">
    <Image
      src="/logo2.jfif"
      alt="Logo"
      width={120}
      height={120}
      className="rounded-full"
    />
  </div>
  <h1 className="font-bold mb-8 text-[40px] sm:text-[55px] md:text-[65px] lg:text-[70px]">
    The Jewel Of Excellence
  </h1>
  <p className="font-normal mb-10 text-[18px] sm:text-[22px] md:text-[28px]">
    "A symbol of everlasting love. Innovative design, impeccable craftsmanship."
  </p>
  <h2 className="font-bold mb-11 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]">
    "Where Art Meets Jewelry"
  </h2>
  <button className="p-4 bg-black text-white font-bold text-[20px] sm:text-[25px] md:text-[28px] w-[230px] sm:w-[250px] lg:w-[300px] outline-double active:bg-orange-600 rounded-2xl h-[66px] hover:bg-orange-600">
    Order Now
  </button>
</div>

      </main>
      
      {/* Additional components */}
      <Body />
      <Intro />
    </>
  );
}
