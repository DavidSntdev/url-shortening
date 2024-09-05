import { Button } from "@nextui-org/button";
import Image from "next/image";

import { data } from "@/pages/api/data";

export default function Started() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center gap-10 w-[50%]">
        <div className="flex flex-col">
          <h1 className="text-veryDarkBlue dark:text-violet-600  text-7xl font-bold">
            More than just shorter links
          </h1>
          <p className="text-grayishViolet text-xl">
            Build your brand&apos;s recognation and get detailed insights on how
            your links are perfoming.
          </p>
        </div>
        <div>
          <Button className="rounded-full bg-cyan px-5 font-bold">
            Get Started
          </Button>
        </div>
      </div>
      <div className="w-[45%]">
        <Image alt="imagem promocional" src={data.outros.illustration} />
      </div>
    </div>
  );
}
