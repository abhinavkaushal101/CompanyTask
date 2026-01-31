import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        style={{
          background:
            "url('https://theme.madsparrow.me/most/wp-content/uploads/2022/10/most_slide_3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen fixed w-screen z-[-10]"
      >
        <div className="relative flex justify-center px-2 text-center mt-[6%] items-center h-screen md:text-6xl">
           {/* Background Accent */}
      <div className="absolute -top-10 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="absolute left-[11%] top-[29%] w-20 rounded-full">
            <img
              className=" w-[50%] object-contain"
              src="https://theme.madsparrow.me/most/wp-content/uploads/2022/09/most_logo2_light.svg"
              alt=""
            />
          </div>
          <div className="text-white">
          <h1>We a graphic design agency forvisually compelling stories.​</h1>
          <button className="text-sm">Lets Talk</button>
          </div>

        </div>
      </div>

      {/* STACKING CARDS */}
      <div className="stack-wrapper ">
        <div className="CardFolding card-1 ">
          <div className="card text-red-500 bg-base-100 sm:top-[100%] top-[100vh]">
          <div className="pb-2 text-[#757575]">
            <span>. . .</span>
          {/* <span>________</span> */}
          </div>
          

            <div className=" text-base-content  w-full items-center md:px-14 px-5 py-8 md:py-14 ">
              <h1 className="md:text-6xl ">The Service </h1>
              <h1 className="md:text-6xl ">We Provide For You</h1>
            </div>
            <div className="md:w-[90%]">
              <Services />{" "}
            </div>
          </div>
        </div>

        {/* <div className="CardFolding card-2">
          <div className="card">Card Two</div>
        </div>

        <div className="CardFolding card-3">
          <div className="card">Card Three</div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
