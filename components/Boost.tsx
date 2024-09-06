import { Button } from "@nextui-org/button";

export default function Boost() {
  return (
    <div
      className="w-full bg-boost-desktop py-12 flex flex-col items-center justify-center bg-darkViolet gap-5"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-white">Boost your links today</h1>
      <Button className="px-10 font-bold rounded-full py-6 text-white bg-cyan">Get Started</Button>
    </div>
  );
}
