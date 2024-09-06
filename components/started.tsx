import { Button } from "@nextui-org/button";
import Image from "next/image";

import { data } from "@/pages/api/data";

export default function Started() {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div className="w-full flex flex-col justify-center gap-10 lg:w-[50%] order-2 items-center lg:items-start lg:order-1">
        <div className="flex flex-col">
          <h1 className="text-veryDarkBlue dark:text-violet-600 text-4xl text-center lg:text-start lg:text-7xl font-bold">
            More than just shorter links
          </h1>
          <p className="text-grayishViolet lg:text-xl mt-5 lg:mt-0 text-center lg:text-start">
            Build your brand&apos;s recognation and get detailed insights on how
            your links are perfoming.
          </p>
        </div>
        <div>
          <Button className="rounded-full bg-cyan px-5 font-bold w-36 h-12 text-white">
            Get Started
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-[45%] order-1 lg:order-2">
        <Image alt="imagem promocional" src={data.outros.illustration} />
      </div>
    </div>
  );
}
