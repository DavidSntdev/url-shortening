import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import ContentFooter from "@/components/contentFooter";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-white dark:bg-darkGray min-h-screen max-h-full">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-6xl px-6 flex-grow pt-10">
        {children}
      </main>
      <footer className="w-full flex-col flex py-3 bg-veryDarkViolet h-64">
        <ContentFooter />
        <Link
          isExternal
          className="flex justify-center w-full self-end gap-1 text-current"
          href="https://github.com/DavidSntdev"
          title="Github of Developer"
        >
          <span className="text-default-600">Coded by</span>
          <p className="text-primary">David Santos</p>
        </Link>
      </footer>
    </div>
  );
}
