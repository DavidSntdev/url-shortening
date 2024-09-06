import { Button } from "@nextui-org/button";
import { useState } from "react";

interface ShowLinkProps {
  url: string;
  shortenedUrl: string;
}

export default function ShowLink({ url, shortenedUrl }: ShowLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${shortenedUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="flex w-full gap-3 lg:px-12 flex-col lg:flex-row lg:justify-between">
      <p className="border-b-1 lg:border-none pb-3">{url}</p>

      <div className="flex gap-3 lg:gap-5 flex-col lg:flex-row lg:items-center">
        <a
          className="text-cyan"
          href={`https://${shortenedUrl}`}
          rel="noreferrer"
          target="_blank"
        >
          https://{shortenedUrl}
        </a>
        <Button
          className={`px-7 rounded-md text-white ${copied ? "bg-darkViolet" : "bg-cyan"} `}
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
