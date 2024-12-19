import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2c1c18] to-[#4a322d] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly gap-6">
         <div className="w-full md:w-1/2 lg:flex-1">
          <h3 className="text-2xl font-bold text-orange-500">Swasthi</h3>
          <p className="mt-2 text-sm">
            Swasthi is your all-in-one health app for personalized wellness
            insights, progress tracking, and daily motivation. Available on
            Android and iOS. Join our community today!
          </p>
          <p className="mt-4 text-sm">
            📧{" "}
            <a
              href="mailto:help-support@fitnearn.com"
              className="text-orange-500 underline"
            >
              help-support@fitnearn.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Twitter">
              <img
                src="path/to/twitter-icon.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="path/to/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="path/to/instagram-icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                src="path/to/pinterest-icon.png"
                alt="Pinterest"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="w-1/2 md:w-1/4 lg:flex-1">
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="w-1/2 md:w-1/4 lg:flex-1">
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

         <div className="w-full md:w-1/2 lg:flex-1">
          <h4 className="font-semibold text-lg mb-4">Download App</h4>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/apple.png" alt="App Store" className="w-8 h-8" />
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
              className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src="/playstore.png" alt="Google Play" className="w-8 h-8" />
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
      </div>

      <hr className="border-t border-gray-700 my-6" />

      {/* Bottom Section */}
      <div className="text-center text-sm">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>
          Made with <span className="text-red-500">❤️</span> in India &nbsp; |
          &nbsp; Design and Developed by FitnEarn
        </p>
      </div>
    </footer>
  );
};

export default Footer;
