import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Boost from "@/components/Boost";

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
      <Boost />
      <Footer />
    </div>
  );
}
