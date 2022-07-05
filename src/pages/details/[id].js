import { products } from "../../data/Products";
import Link from "next/link";
import DetailProduct from "../../components/DetailProduct";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useAppContext } from "../../context/AppGlobalState";

export default function Details({ product }) {
  const { cartItemNumber } = useAppContext();

  return (
    <>
      <div className="bg-green-900 h-24 flex items-center fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between p-10">
          <Link href="/">
            <a>
              <h1 className="text-lg font-rubik font-bold text-orange-500">
                Ecommerce NextJs
              </h1>
            </a>
          </Link>
          <div className="relative">
            <Link href={"/shoppingCart"}>
              <button>
                <HiOutlineShoppingBag className="text-2xl text-white" />
                <span className="bg-orange-500 hover:bg-orange-400 text-white px-2 py-0.5 rounded-full text-xs font-semibold absolute -top-3 left-3">
                  {cartItemNumber}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-green-100 lg:h-[100vh]">
        <DetailProduct product={product} />
      </div>
    </>
  );
}

export const getStaticProps = ({ params: { id } }) => {
  const product = products.find((p) => p.id === id);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: products.map((p) => ({ params: { id: p.id } })),
    fallback: false,
  };
};
