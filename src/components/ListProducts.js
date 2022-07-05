import { useRouter } from "next/router";
import { RiShoppingBasketFill } from "react-icons/ri";
import { useAppContext } from "../context/AppGlobalState";

export default function ListProducts({ listProducts }) {
  const { addToCart } = useAppContext();
  const router = useRouter();

  return (
    <div className="grid gap-y-12 lg:grid-cols-4 md:grid-cols-2 md:gap-2 lg:gap-x-8 lg:gap-y-8 justify-center p-2">
      {listProducts.map((item, i) => (
        <div
          key={i}
          className="shadow-lg rounded-lg bg-white relative cursor-pointer"
          onClick={() => router.push(`/details/${item.id}`)}
        >
          <img
            src={item.img}
            className="rounded-t-lg lg:w-[300px] w-[300px] md:w-full h-[300px] object-cover"
          />
          <div className="flex items-center px-2 py-4 justify-between">
            <h1 className="capitalize font-rubik font-semibold text-orange-500">
              {item.name}
            </h1>
            <h1 className="font-rubik font-bold">
              {Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </h1>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item.id);
            }}
            className="absolute top-5 left-5 bg-orange-500 hover:bg-orange-400 rounded-full p-1"
          >
            <RiShoppingBasketFill className="text-white text-2xl" />
          </button>
        </div>
      ))}
    </div>
  );
}
