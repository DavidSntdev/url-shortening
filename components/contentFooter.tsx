import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function ContentFooter() {
  return (
    <div className="grid grid-cols-12 h-[90%] py-8 max-w-6xl mx-auto gap-10">
      <div className="col-span-3">
        <h1>Shortly</h1>
      </div>
      <div className="flex col-span-2 flex-col">
        <h1>Features</h1>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div className="flex col-span-2 flex-col">
        <h1>Resources</h1>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div className="flex col-span-2 flex-col">
        <h1>Company</h1>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>
      <div className="flex col-span-3 gap-3">
        <FaFacebookSquare size={40} />
        <IoLogoTwitter size={40} />
        <FaPinterest size={40} />
        <FaInstagram size={40} />
      </div>
    </div>
  );
}
