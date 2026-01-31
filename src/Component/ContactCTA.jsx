import React from "react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-base-200 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – CONTACT FORM */}
        <div className="bg-base-100 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Talk About Your Project
          </h2>
          <p className="opacity-70 mb-8">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <textarea
              placeholder="Tell us about your project"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>

            <button className="btn text-white bg-[#300837] w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT – CTA CARD */}
        <div className="relative ">
            {/* <div className=""> */}
                <img className="absolute w-[500px] z-[0] md:top-[-75%] top-[-35%] left-3 " src="/mang.gif" alt="" />
            {/* </div> */}
          <div className="bg-[#300837] relative z-[1] text-primary-content rounded-3xl p-10 md:p-14 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Grow Your Business?
            </h3>

            <p className="mb-10 opacity-90">
              Get a free consultation and discover how we can help you increase
              traffic, leads, and conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="btn btn-secondary w-full sm:w-auto"
              >
                📞 Call Now
              </a>

              <a
                href="#contact"
                className="btn btn-outline btn-secondary w-full sm:w-auto"
              >
                Get Quote
              </a>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
