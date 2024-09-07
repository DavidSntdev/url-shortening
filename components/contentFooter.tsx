import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ContentFooter() {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-10  lg:grid lg:grid-cols-12 h-[90%] py-8 max-w-6xl mx-auto text-gray">
      <div className="lg:col-span-4">
        <h1 className="font-bold text-3xl text-white text-center">Shortly</h1>
      </div>
      <div className="flex lg:col-span-2 flex-col gap-3 items-center lg:items-start">
        <h1 className="text-white text-sm font-bold mb-2">Features</h1>
        <p className="text-xs hover:text-cyan cursor-pointer">
          Link Shortening
        </p>
        <p className="text-xs hover:text-cyan cursor-pointer">Branded Links</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Analytics</p>
      </div>
      <div className="flex lg:col-span-2 flex-col gap-3 items-center lg:items-start">
        <h1 className="text-white text-sm font-bold mb-2">Resources</h1>
        <p className="text-xs hover:text-cyan cursor-pointer">Blog</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Developers</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Support</p>
      </div>
      <div className="flex lg:col-span-2 flex-col gap-3 items-center lg:items-start">
        <h1 className="text-white text-sm font-bold mb-2">Company</h1>
        <p className="text-xs hover:text-cyan cursor-pointer">About</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Our Team</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Careers</p>
        <p className="text-xs hover:text-cyan cursor-pointer">Contact</p>
      </div>
      <div className="flex lg:col-span-2 gap-6">
        <FaFacebookSquare size={30} />
        <IoLogoTwitter size={30} />
        <FaPinterest size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  );
}
