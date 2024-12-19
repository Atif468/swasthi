import React from "react";

const HealthJourney = () => {
  return (
    <section className="bg-black text-white py-12 px-6 sm:px-8 md:px-16">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Transform Your Health Journey with Swasthi
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
            <strong>
              Take Charge of Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold">
                Health in an Instant
              </span>
            </strong>
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
            <strong>Swasthi</strong>, a comprehensive health and wellness app
            offering personalized insights and interactive tools with
            multilingual features. Track your BMI, BMR, Body Fat, Calorie Burn,
            Water intake, and many more with our user-friendly health
            calculators. Start your journey to better health now!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/apple.png"
                alt="App Store"
                className="w-5 sm:w-6 h-auto"
              />
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Download on the
                </span>
                <span className="block text-sm sm:text-lg font-semibold leading-tight">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/playstore.png"
                alt="Google Play"
                className="w-5 sm:w-6 h-auto"
              />
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  Get it on
                </span>
                <span className="block text-sm sm:text-lg font-semibold leading-tight">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <div className="relative w-full max-w-lg">
            <div className="w-[100%] h-[100%]">
              <img
                src="/Ellipse.png"
                alt="Background Ellipse"
                className="z-0"
              />
            </div>
            <img
              src="/Mockup Mobile.png"
              alt="Mobile Mockup"
              className="absolute w-[75%] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[75%] md:w-[75%] lg:w-[75%] z-10"
            />
          </div>

           <img
            src="/Circle (1).png"
            alt="Decorative Circle 1"
            className="absolute w-16 sm:w-20 md:w-24 top-[66%] left-[30%] md:left-[15%] transform -translate-y-1/2 z-50"
          />

           <img
            src="/Circle (2).png"
            alt="Decorative Circle 2"
            className="absolute w-16 sm:w-20 md:w-24 top-[82%] left-[30%] md:left-[35%] transform -translate-y-1/2 z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthJourney;
