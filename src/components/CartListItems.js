import Link from "next/link";
import { useAppContext } from "../context/AppGlobalState";

export default function CartListItems() {
  const {
    deleteFromCart,
    addToCart,
    state: { cart },
  } = useAppContext();

  return (
    <ul className="lg:w-[60vw]">
      {cart.length === 0 && (
        <p className="text-center font-rubik lg:text-4xl uppercase lg:mt-36">
          there are no products in the cart
        </p>
      )}
      {cart.map((item, index) => (
        <li
          key={index}
          className="bg-white flex mx-5 shadow-lg rounded-lg my-2"
        >
          <Link href={`/details/${item.id}`}>
            <div className="lg:m-10 m-5 lg:w-[15vw] lg:h-[15vh] w-[50vw]  flex items-center cursor-pointer">
              <img
                src={item.img}
                className="rounded-md shadow-lg bg-white object-cover lg:w-[15vw] lg:h-[20vh] w-[50vw] h-[20vh] md:h-[25vh]"
              />
            </div>
          </Link>

          <div className="my-10 text-black font-rubik w-full flex flex-col lg:justify-around justify-between">
            <h1 className="font-bold lg:text-3xl text-[18px]">{item.name}</h1>
            <div className="flex items-center">
              <button
                onClick={() => deleteFromCart(item.id)}
                className="text-white bg-orange-500 hover:bg-orange-400 rounded-sm lg:py-1 px-4"
              >
                -
              </button>
              <p className="px-5 font-bold">{item.quantity}</p>
              <button
                onClick={() => addToCart(item.id)}
                className="text-white bg-orange-500 hover:bg-orange-400 rounded-sm lg:py-1 px-4"
              >
                +
              </button>
            </div>
            <span className="capitalize flex">
              total price:
              <h1 className="font-bold pl-2">
                {Number(item.price * item.quantity).toLocaleString("as-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </h1>
            </span>
            <div>
              <button
                onClick={() => deleteFromCart(item.id, true)}
                className="rounded-sm  capitalize font-rubik bg-red-300 py-0.5 px-1 hover:bg-red-200 font-semibold text-[14px]"
              >
                delete all
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
