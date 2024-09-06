import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import axios from "axios";

import ShowLink from "./showLink";

export default function ShortenLink() {
  const [url, setUrl] = useState<string>("");
  const [shortenedUrls, setShortenedUrls] = useState<
    { url: string; shortenedUrl: string }[]
  >([]);

  const handleShorten = async () => {
    if (url) {
      try {
        const response = await axios.post(
          "https://api.rebrandly.com/v1/links",
          {
            destination: url,
            domain: { fullName: "rebrand.ly" },
          },
          {
            headers: {
              "Content-Type": "application/json",
              apikey: "d54ce2dfa8bb47249d168610ded4ccb5",
            },
          }
        );

        setShortenedUrls([
          ...shortenedUrls,
          { url, shortenedUrl: response.data.shortUrl },
        ]);
        setUrl(""); // Clear the input after shortening
      } catch (error) {
        console.error("Erro ao encurtar o link:", error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          className="bg-cyan text-white py-8 px-14 text-xl"
          onClick={handleShorten}
        >
          Shorten It!
        </Button>
      </div>
      {shortenedUrls.map((link, index) => (
        <ShowLink key={index} shortenedUrl={link.shortenedUrl} url={link.url} />
      ))}
    </div>
  );
}
