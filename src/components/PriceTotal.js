import { useAppContext } from "../context/AppGlobalState";

export default function PriceTotal() {
  const { priceTotal } = useAppContext();

  return (
    <h1 className="flex font-rubik lg:text-2xl capitalize">
      total price:
      <p className="pl-2 font-bold">
        {Number(priceTotal).toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </p>
    </h1>
  );
}
