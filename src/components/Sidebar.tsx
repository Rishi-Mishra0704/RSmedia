import React from "react";
import Link from "next/link";
import { RxSketchLogo, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed sm:w-20 md:w-40 lg:w-60 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col sm:items-center md:items-start">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-2xl inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-300 w-full p-2"></span>
          <Link href="/">
            <div className="flex flex-row items-center">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 mx-1 p-3 rounded-2xl inline-block">
                <AiFillHome size={20} />
              </div>
              Home
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row items-center">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 mx-1 p-3 rounded-2xl inline-block">
                <RxPerson size={20} />
              </div>
              Know Us
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-row items-center">
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
                <HiOutlineShoppingBag size={20} />
              </div>
              Services
            </div>
          </Link>
          <Link href="/">
          <div className="flex flex-row items-center">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-2xl inline-block">
              <AiOutlineMail size={20} />
            </div>
            Contact Us
          </div>
          </Link>
        </div>
        <div></div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
