import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg?react";

const UiHeader = () => {
  return (
    <header className="flex flex-col">
      <div className=" row bg-background text-white py-[5px] not-lg:hidden">
        <div className="mx-[40px] px-[15px] text-sm grid grid-cols-2">
          <div className="flex flex-row items-center justify-baseline">
            <ul className="flex gap-2 text-md mr-6 py-1">
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
            <h1 className="py-1 text-center">
              Need Any Help? Call us: +222-1800-2628 rokan@domain.com
            </h1>
          </div>
          <div className="flex flex-row items-center justify-end">
            <ul className="flex gap-6 text-md mr-6 py-1">
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
            <button className=" mr-6">
              United States (USD $) <i className=" ri-arrow-down-s-line"></i>
            </button>
            <button>
              English <i className=" ri-arrow-down-s-line"></i>
            </button>
          </div>
        </div>
      </div>
      <nav className="row text-text-main bg-white py-4.5">
        <div className="flex justify-between items-center px-3.75 mx-10 not-lg:px-0 not-lg:mx-3.75">
          <div>
            <button className=" text-2xl lg:hidden lg:basis-auto">
              <i className="ri-menu-line"></i>
            </button>
          </div>
          <div className="flex basis-[25%] not-lg:justify-center not-lg:basis-full">
            <Link to="/">
              <Logo width={120} height={18} color="black" />
            </Link>
          </div>
          <div className="flex basis-[50%] text-md justify-center not-lg:hidden">
            <Link className="py-2.5 px-3.75 " to="/">
              Home <i className=" ri-arrow-down-s-line"></i>
            </Link>
            <Link className="py-2.5 px-3.75" to="/shop">
              Shop <i className=" ri-arrow-down-s-line"></i>
            </Link>
            <Link className="py-2.5 px-3.75" to="/">
              Product <i className=" ri-arrow-down-s-line"></i>
            </Link>
            <Link className="py-2.5 px-3.75" to="/">
              Pages <i className=" ri-arrow-down-s-line"></i>
            </Link>
            <Link className="py-2.5 px-3.75" to="/blog">
              Blogs <i className=" ri-arrow-down-s-line"></i>
            </Link>
            <a
              className="py-2.5 px-3.75"
              href="https://themeforest.net/item/rokan-multipurpose-shopify-theme-os-20/54337950"
            >
              Buy Theme! <i className=" ri-arrow-down-s-line"></i>
            </a>
          </div>
          <div className="flex basis-[25%] items-center text-2xl gap-6 justify-end not-lg:basis-auto">
            <Link to="/">
              <i className=" ri-search-line"></i>
            </Link>
            <Link className="not-lg:hidden" to="/login">
              <i className=" ri-user-3-line"></i>
            </Link>
            <Link className="not-lg:hidden" to="/">
              <i class="ri-heart-line"></i>
            </Link>
            <Link to="/cart">
              <i class="ri-shopping-bag-line"></i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UiHeader;
