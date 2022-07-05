export default function Hero({ animated }) {
  return (
    <div id="home" className="bg-green-900 overflow-hidden">
      <div className="min-h-screen w-screen container mx-auto flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-between lg:px-36 overflow-hidden">
        <div
          className={`${
            animated === "home" && "animate__animated animate__fadeInLeft"
          } mt-20 lg:text-left text-center`}
        >
          <h1 className="text-2xl lg:text-7xl font-bold mb-5 lg:mb-10 font-rubik text-white tracking-wide">
            Modern <br />
            furniture for
            <br />
            your home
          </h1>
          <div>
            <p className="text-gray-400 font-rubik tracking-wide text-sm lg:text-xl mb-20">
              Find traditional and modern furniture to bring <br /> a
              sophisticated look to you room
            </p>
          </div>
          <button className="px-5 py-4 bg-orange-500 hover:bg-orange-400 cursor-pointer rounded-lg text-gray-200 font-bold font-rubik">
            Shop now
          </button>
        </div>
        <img
          src="hero.png"
          alt="hero"
          className={`${
            animated === "home" && "animate__animated animate__fadeInRight"
          } object-contain lg:h-full lg:w-3/5 md:w-3/5 md:h-full w-3/5 h-full`}
        />
      </div>
    </div>
  );
}
