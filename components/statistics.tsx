import Image from "next/image";

import { data } from "@/pages/api/data";

export default function Statistics() {
  return (
    <div className="flex gap-16 py-5 flex-col lg:flex-row">
      <div className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start">
        <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
          <Image alt="icon brand" src={data.icons.brand} />
        </div>
        <h1 className="font-bold text-veryDarkBlue text-xl">
          Brand Recognition
        </h1>
        <p className="text-grayishViolet text-center lg:text-start">
          Boost your brand recognition with each click. Generic links
          don&rsquo;t mean a thing. Branded links help instil confidence in your
          content
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start">
        <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
          <Image alt="icon brand" src={data.icons.detailed} />
        </div>
        <h1 className="font-bold text-veryDarkBlue text-xl">
          Detailed Records
        </h1>
        <p className="text-grayishViolet text-center lg:text-start">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:justify-start lg:items-start">
        <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
          <Image alt="icon brand" src={data.icons.customizable} />
        </div>
        <h1 className="font-bold text-veryDarkBlue text-xl">
          Fully Customizable
        </h1>
        <p className="text-grayishViolet text-center lg:text-start">
          Improve brand awareness and content discoverability through
          customizable links. supercharging audience engagement
        </p>
      </div>
    </div>
  );
}
