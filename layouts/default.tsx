import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import ContentFooter from "@/components/contentFooter";
import Footer from "@/components/footer";

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
      <Footer />
    </div>
  );
}
