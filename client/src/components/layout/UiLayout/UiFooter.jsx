import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";

const UiFooter = () => {
  return (
    <footer className="flex flex-col bg-background text-white">
      <div className=" grid grid-cols-2 not-xl:grid-cols-1 pt-[90px] pb-[30px] px-[55px] items-center bottom-px border-b border-b-secondary">
        <div className="grid grid-cols-2 not-md:grid-cols-1">
          <div className="flex flex-col max-w-[545px] px-3.75 mb-7.5">
            <div className="img mb-6.25">
              <Logo width={120} height={18} color="white" />
            </div>
            <p className="text-sm text-text-light-gray mb-5">
              Our mission is to provide an unparalleled customer experience in
              the fashion industry, ensuring exceptional quality and service in
              every interaction.
            </p>
            <p className="text-sm text-text-light-gray mb-1.25">
              <span className="text-white">Phone:</span> +222-1800-2628
            </p>
            <p className="text-sm text-text-light-gray mb-1.25">
              <span className="text-white">Address:</span> 502 New Design Str,
              Melbourne, Australia
            </p>
            <p className="text-sm text-text-light-gray mb-4">
              <span className="text-white">Email:</span> rokan@domain.com
            </p>
            <ul className="flex flex-row gap-6.25 text-xl mb-3.75">
              <li>
                <a href="https://www.instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com">
                  <i className="ri-tiktok-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <i className="ri-youtube-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.x.com">
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[50%] px-3.75 mb-7.5">
            <h3 className="pb-2.5 text-lg">Our Company</h3>
            <ul className="flex flex-col mb-3.5 pt-3.75 text-sm text-text-light-gray">
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  About Us
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Our Stores
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Size Guide
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  My Account
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 not-md:grid-cols-1">
          <div className="flex flex-col w-[50%] px-3.75 mb-7.5">
            <h3 className="pb-2.5 text-lg">Customer Service</h3>
            <ul className="flex flex-col mb-3.5 pt-3.75 text-sm text-text-light-gray">
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Theme FAQs
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Refund Policy
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Advanced Search
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Store Locations
                </Link>
              </li>
              <li className="mb-2.5">
                <Link className=" hover:text-white" to="/">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-3.75 mb-7.5 h-[247px]">
            <h3 className="pb-2.5 text-lg">Sign Up To Newsletter</h3>
            <div className="flex flex-col mb-3.5 pt-3.75">
              <p className="text-sm text-text-light-gray">
                Sign up for exclusive updates, new arrivals & insider only
                discounts
              </p>
              <div className="mt-7.5">
                <form action="" id="subscribe-form">
                  <div className="flex rounded-3xl">
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      autocapitalize="off"
                      autocomplete="off"
                      spellcheck="false"
                      className="text-text-light-gray bg-transparent rounded-3xl border border-text-light-gray py-2.5 px-5 mr-2.5 flex-auto"
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="bg-white text-background rounded-3xl px-6.25 text-[11px] font-medium cursor-pointer"
                      aria-label="Subscribe"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-sm text-text-light-gray mt-3.75">
                ***By entering the e-mail you accept the terms and conditions
                and the privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 px-3.75">
        <div className="grid grid-cols-2 py-7.5">
          <div className="flex">
            <p className="text-sm text-text-light-gray">
              © 2024 Rokan store. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <img
              src="https://rokan-theme.myshopify.com/cdn/shop/files/payment.png"
              alt="Payments"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UiFooter;
