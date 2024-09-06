import { Input } from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";
import Started from "@/components/started";
import Statistics from "@/components/statistics";
import Advanced from "@/components/advanced";

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
        <Advanced />
        <Statistics />
      </section>
    </DefaultLayout>
  );
}
