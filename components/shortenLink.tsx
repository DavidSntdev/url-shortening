import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState, useEffect } from "react";
import axios from "axios";

import ShowLink from "./showLink";

export default function ShortenLink() {
  const [url, setUrl] = useState<string>("");
  const [shortenedUrls, setShortenedUrls] = useState<
    { url: string; shortenedUrl: string }[]
  >([]);

  useEffect(() => {
    const savedUrls = localStorage.getItem("shortenedUrls");

    if (savedUrls) {
      setShortenedUrls(JSON.parse(savedUrls));
    }
  }, []);

  const handleShorten = async () => {
    if (url) {
      try {
        const response = await axios.post(
          "https://api-ssl.bitly.com/v4/shorten",
          {
            long_url: url,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer d64fdf96f2e945f21315eddc1e4d84b32f8af025`,
            },
          }
        );

        const newShortenedUrls = [
          ...shortenedUrls,
          { url, shortenedUrl: response.data.link },
        ];

        setShortenedUrls(newShortenedUrls);
        localStorage.setItem("shortenedUrls", JSON.stringify(newShortenedUrls));
        setUrl("");
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
