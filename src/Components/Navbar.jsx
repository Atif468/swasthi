import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black px-11 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
          <img
            src="/Logo.png"
            alt="logo"
            className="w-8 h-8"
          />
        <h1 className="text-orange-500 text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Swasthi
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {["Home", "Features", "How It Works", "Pricing"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300">
          Download Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
