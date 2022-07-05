import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

export default function BackTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-orange-500 hover:bg-orange-400 opacity-0 lg:opacity-100 text-white w-12 h-12 rounded-full fixed right-24 bottom-28 cursor-pointer flex justify-center items-center transition-all"
      >
        <BsChevronUp className="w-6 h-6" />
      </button>
    )
  );
}
