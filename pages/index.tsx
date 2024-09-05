import Image from "next/image";
import { Input } from "@nextui-org/input";

import { data } from "./api/data";

import DefaultLayout from "@/layouts/default";
import Started from "@/components/started";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Started />
        <div>
          <Input
            labelPlacement="outside"
            placeholder="Shorten a link here..."
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            type="url"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-veryDarkBlue font-bold text-5xl py-5">
            Advanced Statics
          </h1>
          <p className="text-grayishViolet">
            Track how your links are performing across the web with
          </p>
          <p className="text-grayishViolet">
            our advanced statistics dashboard
          </p>
        </div>
        <div className="flex gap-16 py-5">
          <div className="flex flex-col gap-5">
            <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
              <Image alt="icon brand" src={data.icons.brand} />
            </div>
            <h1 className="font-bold text-veryDarkBlue text-xl">
              Brand Recognition
            </h1>
            <p className="text-grayishViolet">
              Boost your brand recognition with each click. Generic links
              don&rsquo;t mean a thing. Branded links help instil confidence in
              your content
            </p>
          </div>
          <div className="flex flex-col  gap-5">
            <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
              <Image alt="icon brand" src={data.icons.detailed} />
            </div>
            <h1 className="font-bold text-veryDarkBlue text-xl">
              Detailed Records
            </h1>
            <p className="text-grayishViolet">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions
            </p>
          </div>
          <div className="flex flex-col  gap-5">
            <div className="bg-darkViolet w-[80px] h-[80px] rounded-full flex justify-center items-center mb-3">
              <Image alt="icon brand" src={data.icons.customizable} />
            </div>
            <h1 className="font-bold text-veryDarkBlue text-xl">
              Fully Customizable
            </h1>
            <p className="text-grayishViolet">
              Improve brand awareness and content discoverability through
              customizable links. supercharging audience engagement
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
