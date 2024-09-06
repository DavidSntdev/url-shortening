import { Input } from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";
import Started from "@/components/started";
import Statistics from "@/components/statistics";
import Advanced from "@/components/advanced";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-8 md:py-10 gap-20">
        <Started />
        <div
          className="w-full bg-shorten-desktop p-10 bg-darkViolet rounded-xl py-16"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Input
            labelPlacement="outside"
            placeholder="Shorten a link here..."
            type="url"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Advanced />
          <Statistics />
        </div>
      </section>
    </DefaultLayout>
  );
}
