import React from "react";

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-6">
          Boost Your Health with Swasthi's
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"> Essential Features</span>
        </h2>
        <p className="text-center mb-12">
          Explore Swasthi’s powerful tools—from mood and fitness tracking to
          comprehensive health assessments in multiple languages.
        </p>

        <div className="relative bg-custom-gradient rounded-3xl p-8">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-1 space-y-6">
              <div className="p-6 text-right">
                <div className="flex justify-end">
                  <img src="/icon1.png" alt="" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Mood Tracking
                </h3>
                {/* <div className="h"></div> */}
                <p className="text-gray-400 text-sm">
                  Helps you monitor your mood patterns, offering personalized
                  insights to maintain a balanced mind and body.
                </p>
              </div>

              <div className="p-6 text-right">
                <div className="flex justify-end">
                  <img src="/icon2.png" alt="" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Workout/ Steps/ Sleep/ Water Tracking
                </h3>
                <p className="text-gray-400 text-sm">
                  Track your workouts, daily steps, sleep patterns, and water
                  intake all in one place.{" "}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="shadow-lg rounded-xl overflow-hidden -top-7">
                <img
                  src="/iPhone 15.png"
                  alt="Mobile Mockup"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="p-6 text-left">
                <img src="/icon3.png" alt="" />{" "}
                <h3 className="text-xl font-bold text-white mb-2">
                  Multilingual
                </h3>
                <p className="text-gray-400 text-sm">
                  Support for multiple languages, making health monitoring
                  accessible and easy for users around the globe.
                </p>
              </div>

              <div className="p-6 text-left">
                <img src="/icon4.png" alt="" />{" "}
                <h3 className="text-xl font-bold text-white mb-2">
                  Health Calculators
                </h3>
                <p className="text-gray-400 text-sm">
                  Access 14 powerful health calculators, including BMI, BMR,
                  calorie burn, water requirement, body fat percentage, TDEE,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
