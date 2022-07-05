import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";

export default function Contact() {
  return (
    <div id="contact" className="bg-green-100 pt-10 lg:pt-0">
      <div className="lg:pb-[50px] container mx-auto flex lg:flex-row flex-col-reverse justify-between px-5 lg:px-0">
        <div className="w-full flex lg:flex-col lg:justify-around justify-between items-center pt-10 lg:pt-0">
          <h1 className="tracking-wider text-orange-500 font-rubik font-bold lg:text-2xl text-1xl">
            Ecommerce
          </h1>
          <div className="flex lg:flex-row lg:space-y-0 justify-center space-x-6">
            <RiFacebookBoxFill className="lg:text-3xl text-2xl cursor-pointer" />
            <FaTwitterSquare className="lg:text-3xl text-2xl cursor-pointer" />
            <RiInstagramFill className="lg:text-3xl text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="w-full lg:px-5">
          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
                  First Name
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
                  Email
                </label>
                <input
                  className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
                  type="text"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
                  Comment
                </label>
                <textarea
                  rows="6"
                  className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
                />
              </div>
            </div>
          </form>
          <button className="bg-orange-500 hover:bg-orange-400 font-medium text-white px-5 lg:py-3 py-2 flex rounded-sm capitalize font-rubik">
            send
          </button>
        </div>
      </div>
      <h1 className="mt-10 h-24 text-[12px] bg-green-700 flex justify-center items-center font-rubik text-gray-900">
        <BiCopyright /> 2022. All rights reserved
      </h1>
    </div>
  );
}
