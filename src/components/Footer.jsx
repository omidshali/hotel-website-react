import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto bg-gray-900 text-gray-300 px-2 py-2">
      <div className="grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 px-4 py-8 gap-4">
        <div>
          <h3 className="font-bold uppercase">Solutions</h3>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase">Support</h3>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase">Company</h3>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase">Legal</h3>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="font-bold uppercase">Subscribe to our newsletters</p>
          <p className="p-1">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 mt-4">
            <input
              className="w-full p-2 py-2 rounded-md  text-black"
              type="email"
              placeholder="Enter email..."
            />
            <button className="rounded-md p-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between py-4 md:max-w-[500px] m-auto text-gray-500 text-center">
        <p>2022 Experiences, LLC. All rights reserved</p>
        <div className="flex gap-2 items-center justify-center text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
