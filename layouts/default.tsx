import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

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
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Coded by</span>
          <p className="text-primary">David Santos</p>
        </Link>
      </footer>
    </div>
  );
}
