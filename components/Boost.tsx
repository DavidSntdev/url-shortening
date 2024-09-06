import { Button } from "@nextui-org/button";

export default function Boost() {
  return (
    <div
      className="w-full bg-boost-desktop py-20 flex flex-col items-center justify-center bg-darkViolet"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Boost your links today</h1>
      <Button>Get Startd</Button>
    </div>
  );
}
