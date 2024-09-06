import DefaultLayout from "@/layouts/default";
import Started from "@/components/started";
import Statistics from "@/components/statistics";
import Advanced from "@/components/advanced";
import ShortenLink from "@/components/shortenLink";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-8 md:py-10 gap-20">
        <Started />
        <ShortenLink />
        <div className="flex flex-col gap-5">
          <Advanced />
          <Statistics />
        </div>
      </section>
    </DefaultLayout>
  );
}
