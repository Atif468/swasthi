import React from "react";

const HealthJourney = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Transform Your Health Journey with{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Swasthi
            </span>
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <strong>
              Take Charge of Your{" "}
              <span className="text-orange-400 font-semibold">
                Health in an Instant
              </span>
            </strong>
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            <strong>Swasthi</strong>, a comprehensive health and wellness app
            offering personalized insights and interactive tools with
            multilingual features. Track your{" "}
            <span className="text-yellow-500 font-semibold">
              BMI, BMR, Body Fat, Calorie Burn
            </span>
            , Water intake, and many more with our user-friendly health
            calculators. Start your journey to better health now!
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/apple.png" alt="App Store" className="w-6 h-6" />
              <div className="text-left">
                <span className="block text-xs font-light leading-tight">
                  Download on the
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/playstore.png" alt="Google Play" className="w-6 h-6" />
              <div className="text-left">
                <span className="block text-xs font-light leading-tight">
                  Get it on
                </span>
                <span className="block text-lg font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center relative">
          <img
            src="/Ellipse.png"
            alt="Background Ellipse"
            className=" z-0"
          />
          <img
            src="/Mockup Mobile.png"
            alt="Mobile Mockup Back"
            className="w-60 md:w-96 ml-10 absolute z-10 transform -translate-x-6 -translate-y-6"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HealthJourney;
