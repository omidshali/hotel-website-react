import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="absolute  flex justify-between w-full  text-white p-4">
      <h1 className="font-bold text-2xl z-20">Experiences</h1>
      <AiOutlineMenu
        onClick={() => {
          setShowNavbar(!showNavbar);
          if (!showNavbar) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "auto";
          }
        }}
        className="z-20 cursor-pointer"
        size={25}
      />
      <div
        className={`fixed bg-black/90 w-full top-0 h-screen ease-in-out z-10 duration-300 ${
          showNavbar ? "left-0 " : "left-[-100%] "
        }`}
      >
        <ul className="flex flex-col justify-center h-full w-full items-center">
          <li className="text-xl font-bold m-8 cursor-pointer">Home</li>
          <li className="text-xl font-bold m-8 cursor-pointer">Destinations</li>
          <li className="text-xl font-bold m-8 cursor-pointer">Reservations</li>
          <li className="text-xl font-bold m-8 cursor-pointer">Amenities</li>
          <li className="text-xl font-bold m-8 cursor-pointer">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
