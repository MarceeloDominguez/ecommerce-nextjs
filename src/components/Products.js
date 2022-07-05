import { useEffect, useState } from "react";
import ListProducts from "./ListProducts";

const categories = [
  { id: 1, name: "all" },
  { id: 2, name: "armchair" },
  { id: 3, name: "bed" },
  { id: 4, name: "table" },
];

export default function Products({ products }) {
  const [itemCategory, setItemCategory] = useState(categories[0]);
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    if (itemCategory.name === "all") {
      setListProducts(products);
    } else {
      setListProducts(products);
      const filterProducts = products.filter(
        (product) => product.category === itemCategory.name
      );
      setListProducts(filterProducts);
    }
  }, [itemCategory]);

  return (
    <div className="bg-green-100 lg:h-[95vh] pt-24 lg:pt-0">
      <div
        id="products"
        className="flex flex-col lg:flex-row container mx-auto lg:py-2 justify-between"
      >
        <nav className="lg:translate-y-[20px]">
          <p className="text-center py-2 font-rubik text-xl capitalize lg:border-[1px] border-orange-500 rounded-md lg:bg-orange-500 lg:text-white">
            category
          </p>
          <ul className="flex flex-row md:flex-row justify-evenly items-center lg:items-start lg:flex-col lg:w-24">
            {categories.map((item, i) => (
              <li
                key={i}
                onClick={() => setItemCategory(item)}
                className="font-rubik capitalize lg:text-xl lg:py-2 lg:px-1 lg:my-1 cursor-pointer hover:text-orange-500 text-black lg:hover:border-[1px] lg:hover:border-orange-500 lg:w-full hover:rounded-md"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <ListProducts listProducts={listProducts} />
      </div>
    </div>
  );
}
