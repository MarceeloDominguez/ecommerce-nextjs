import React from "react";
import { useAppContext } from "../context/AppGlobalState";

export default function PaymentForm() {
  const { priceTotal } = useAppContext();

  return (
    <>
      <h1 className="font-bold my-5 font-rubik">Payment Details</h1>
      <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              First Name
            </label>
            <input
              className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              Last Name
            </label>
            <input
              className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              Card Number
            </label>
            <input
              className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
              placeholder="0128987452"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              Expiry
            </label>
            <input
              className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
              type="text"
              placeholder="12/12/2030"
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              CVV
            </label>
            <input
              className="block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none"
              type="text"
              placeholder="****"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-xs font-bold mb-2 font-rubik">
              Country
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white">
                <option>Argentina</option>
                <option>Uruguay</option>
                <option>Chile</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button className="bg-orange-500 hover:bg-orange-400 font-medium text-white px-5 py-3 flex rounded-sm capitalize font-rubik">
        pagar{" "}
        <p className="pl-2 font-bold">
          {Number(priceTotal).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </p>{" "}
      </button>
    </>
  );
}
