import { useAppContext } from "../context/AppGlobalState";
import Link from "next/link";
import CartListItems from "../components/CartListItems";
import PaymentForm from "../components/PaymentForm";

export default function shoppingCart() {
  const {
    state: { cart },
    priceTotal,
  } = useAppContext();

  return (
    <div className="bg-green-100 lg:h-[220vh] md:h-[330vh] h-[340vh]">
      <div className="bg-green-900 h-24 flex items-center fixed top-0 w-full">
        <div className="container mx-auto">
          <Link href="/">
            <a>
              <h1 className="tracking-wider text-orange-500 font-rubik font-bold lg:text-2xl text-1xl px-5 text-center">
                Ecommerce
              </h1>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col container mx-auto pt-28 h-[200vh]">
        <ul className="lg:w-[60vw]">
          {cart.length === 0 && (
            <p className="text-center font-rubik lg:text-4xl uppercase lg:mt-36">
              there are no products in the cart
            </p>
          )}
          {cart.map((item, index) => (
            <CartListItems key={index} item={item} />
          ))}
        </ul>
        <div className="bg-green-100 mx-5 lg:w-[30vw] lg:mx-0">
          <div className="lg:fixed lg:w-[26.7vw] mt-2 lg:mt-0 h-24 rounded-lg bg-white mb-5 shadow-lg justify-center items-center text-center flex">
            <h1 className="flex font-rubik lg:text-2xl capitalize">
              total price:{" "}
              <p className="pl-2 font-bold">
                {Number(priceTotal).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </p>
            </h1>
          </div>
          <div className="lg:fixed top-56 bg-white p-5 rounded-lg shadow-lg lg:w-[26.7vw]">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
