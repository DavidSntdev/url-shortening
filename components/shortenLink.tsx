import { Input } from "@nextui-org/input";

export default function ShortenLink() {
  return (
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
  );
}
