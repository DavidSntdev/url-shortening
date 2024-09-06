import Link from "next/link";

import ContentFooter from "./contentFooter";

export default function Footer() {
  return (
    <footer className="w-full flex-col flex py-3 bg-veryDarkViolet h-full">
      <ContentFooter />
      <Link
        className="flex justify-center w-full self-end gap-1 text-current"
        href="https://github.com/DavidSntdev"
        target="_blank"
        title="Github of Developer"
      >
        <span className="text-default-200">Coded by</span>
        <p className="text-primary">David Santos</p>
      </Link>
    </footer>
  );
}
