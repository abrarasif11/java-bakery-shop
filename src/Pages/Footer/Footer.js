import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../assests/clipart2362429.png'

const Footer = () => {
  return (
    <div className="relative font-josefin mt-16 bg-[#DC0000]">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center"
            >
              <img className='w-[50px]' src={footerImg} alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Java Bakery Shop
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 text-black lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide ">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Espresso
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Frozen Drinks
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Pastries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Espresso
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Cafe Latte
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Cafe Mocha
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Cappuccino
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Americano
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Frozen Drinks
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Oreo Shake

                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Strawberry Milkshake
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Iced Lemon Tea
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Chocolate Milkshake
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Lemonade
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Kiwi Smoothies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Pastries
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Red Velvet Cup Cake
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Choco Cake
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Blueberry Cheese Cake
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Chocolate Brownies
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-white"
                  >
                    Tiramisu Cake
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-center text-gray-100">
            © Copyright 2023 Java Bakery Shop. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;