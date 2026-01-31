import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-base-100 text-base-content py-20 overflow-hidden"
    >
      {/* Background Accent */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div> */}
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We build <span className="text-[#684143]">digital experiences</span>{" "}
            that grow brands
          </h2>

          <p className="text-base md:text-lg opacity-80 mb-6">
            At <strong>Jainshree Digital</strong>, we combine creativity,
            technology, and strategy to craft digital solutions that actually
            work. We don’t just build websites — we build growth engines.
          </p>

          <p className="text-base md:text-lg opacity-80 mb-10">
            From modern UI/UX design to performance-driven development and
            marketing, our focus is always on results, speed, and scalability.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-sm opacity-70">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">30+</h3>
              <p className="text-sm opacity-70">Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">3+</h3>
              <p className="text-sm opacity-70">Years</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">100%</h3>
              <p className="text-sm opacity-70">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-base-100 shadow-xl rounded-2xl p-6 max-w-xs hidden md:block">
            <h4 className="font-semibold mb-2">Why Choose Us?</h4>
            <p className="text-sm opacity-80">
              Clean design, fast performance, SEO-ready structure, and
              scalable code — everything your brand needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
