import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          background:
            "url('hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen fixed w-screen z-[-10]"
      >
        <div className="relative flex justify-center px-2 text-center mt-[6%] items-center h-screen ">

          <div className="absolute md:left-[11%] md:top-[27%] top-[20%] left-[15%] w-20 rounded-full">
            <img
              className=" w-[50%] object-contain"
              src="https://theme.madsparrow.me/most/wp-content/uploads/2022/09/most_logo2_light.svg"
              alt=""
            />
          </div>
          <div className="text-white md:text-6xl text-5xl">
          <h1>We a graphic design agency forvisually compelling stories.​</h1>
         <button className="mt-8 px-6 py-3 text-sm sm:text-base 
            bg-white text-black rounded-full hover:bg-opacity-90 transition">
            Let’s Talk
          </button>
          </div>

        </div>
      </div>

      {/* STACKING CARDS */}
      <div className="stack-wrapper">
  <div className="CardFolding card-1">
    <div className="card text-red-500 bg-base-100">
      <div className="pb-2 text-[#757575]">
        <span>. . .</span>
      </div>

      <div className="text-base-content w-full md:px-14 px-5 py-8 md:py-14">
        <h1 className="text-3xl md:text-6xl">The Service</h1>
        <h1 className="text-3xl md:text-6xl">We Provide For You</h1>
      </div>

      <div className="w-full md:w-[90%] px-4">
        <Services />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
