import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function ShortenLink() {
  return (
    <div
      className="w-full lg:flex-row flex-col bg-shorten-desktop p-5 bg-darkViolet rounded-xl lg:py-10 flex gap-5 lg:px-16"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Input
        classNames={{
          input: "px-5",
          inputWrapper: "py-8",
        }}
        labelPlacement="outside"
        placeholder="Shorten a link here..."
        type="url"
      />
      <Button className="bg-cyan text-white py-8 px-14 text-xl">
        Shorten It!
      </Button>
    </div>
  );
}
