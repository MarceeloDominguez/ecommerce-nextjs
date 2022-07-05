import { Link } from "react-scroll";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useRouter } from "next/router";
import { useAppContext } from "../context/AppGlobalState";

const navigation = [
  { name: "home", href: "home" },
  { name: "about", href: "about" },
  { name: "products", href: "products" },
  { name: "contact", href: "contact" },
];

export default function Nav({ bgColor, setAnimated }) {
  const { cartItemNumber } = useAppContext();
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, i) => (
          <li
            key={i}
            className={`${
              bgColor ? "border-green-700" : "border-green-900"
            } text-white cursor-pointer hover:text-orange-400 font-rubik hover:border-b-[1px] border-b-[1px] hover:border-orange-400`}
          >
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className="transition-all duration-300"
              onSetActive={setAnimated}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <div className="relative">
          <button onClick={() => router.push("/shoppingCart")}>
            <HiOutlineShoppingBag className="text-2xl" />
            <span className="bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full absolute -top-3 left-3">
              {cartItemNumber}
            </span>
          </button>
        </div>
      </ul>
    </nav>
  );
}
