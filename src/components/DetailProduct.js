import Image from "next/image";
import { useAppContext } from "../context/AppGlobalState";

export default function DetailProduct({ product }) {
  const { addToCart } = useAppContext();

  return (
    <div className="container m-auto pt-28 flex lg:flex-row flex-col h-full items-center">
      <div className="w-full flex justify-center p-5 lg:p-0">
        <Image
          src={product.img}
          alt="Vercel Logo"
          width={500}
          height={500}
          className="object-center rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:px-24 px-10 h-[500px] pt-10 lg:pt-0">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-rubik text-orange-500 font-bold">
            {product.name}
          </h1>
          <h1 className="font-rubik font-bold text-2xl">
            {Number(product.price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h1>
        </div>
        <p className="pt-5 font-rubik text-gray-500">{product.description}</p>
        <button
          onClick={() => addToCart(product.id)}
          className="bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-lg mt-10 text-white font-rubik"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
