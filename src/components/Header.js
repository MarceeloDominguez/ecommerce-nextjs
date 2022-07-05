import { useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useAppContext } from "../context/AppGlobalState";
import Link from "next/link";

export default function Header({ setAnimated }) {
  const { cartItemNumber } = useAppContext();
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBgColor(true) : setBgColor(false);
    });
  }, []);

  return (
    <header
      className={`${
        bgColor ? "bg-green-700 h-24" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 px-5 lg:px-0`}
    >
      <div className="container flex items-center mx-auto justify-between lg:px-36 h-full">
        <div className="relative lg:hidden">
          <Link href={"/shoppingCart"}>
            <button>
              <HiOutlineShoppingBag className="text-2xl text-white" />
              <span className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-0.5 rounded-full text-xs font-semibold absolute -top-3 left-3">
                {cartItemNumber}
              </span>
            </button>
          </Link>
        </div>
        <h1 className="lg:block hidden tracking-wider text-orange-500 font-rubik font-bold text-2xl">
          Ecommerce
        </h1>
        <div className="lg:block hidden">
          <Nav bgColor={bgColor} setAnimated={setAnimated} />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
