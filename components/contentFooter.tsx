import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ContentFooter() {
  return (
    <div className="grid grid-cols-12 h-[90%] py-8 max-w-6xl mx-auto text-gray">
      <div className="col-span-4">
        <h1 className="font-bold text-3xl text-white">Shortly</h1>
      </div>
      <div className="flex col-span-2 flex-col gap-3">
        <h1 className="text-white text-sm font-bold mb-2">Features</h1>
        <p className="text-xs">Link Shortening</p>
        <p className="text-xs">Branded Links</p>
        <p className="text-xs">Analytics</p>
      </div>
      <div className="flex col-span-2 flex-col gap-3">
        <h1 className="text-white text-sm font-bold mb-2">Resources</h1>
        <p className="text-xs">Blog</p>
        <p className="text-xs">Developers</p>
        <p className="text-xs">Support</p>
      </div>
      <div className="flex col-span-2 flex-col gap-3">
        <h1 className="text-white text-sm font-bold mb-2">Company</h1>
        <p className="text-xs">About</p>
        <p className="text-xs">Our Team</p>
        <p className="text-xs">Careers</p>
        <p className="text-xs">Contact</p>
      </div>
      <div className="flex col-span-2 gap-6">
        <FaFacebookSquare size={30} />
        <IoLogoTwitter size={30} />
        <FaPinterest size={30} />
        <FaInstagram size={30} />
      </div>
    </div>
  );
}
