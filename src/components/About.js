export default function About({ animated }) {
  return (
    <section
      id="about"
      className="lg:h-[90vh] flex items-center flex-col xl:flex-row lg:gap-20 gap-10 overflow-hidden bg-green-100"
    >
      <img src="living.jpg" alt="living" className="lg:w-[50vw]" />
      <div
        className={`${
          animated === "about" &&
          "animate__animated animate__fadeInRight animate__faster"
        } px-10`}
      >
        <h1 className="lg:text-6xl font-rubik mb-10 text-3xl text-black">
          Create the interior <br /> of your dreams
        </h1>
        <p className="leading-7 text-1xl font-rubik text-gray-700 italic">
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type. <br /> <br />{" "}
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <br />
        <button className="px-6 py-2 border-black border-[1px] bg-white hover:bg-gray-100 text-black font-rubik">
          Read more
        </button>
      </div>
    </section>
  );
}
