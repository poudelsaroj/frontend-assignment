"use client";
import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  const cartCount = 0;
  return (
    <nav className="fixed h-14 top-0 bg-gray-500 w-full p-5 text-white flex items-center justify-around">
      <Link href={"/"} className="text-xl font-bold">
        OnlineStore
      </Link>
      <div className="flex gap-4">
        <Link href={"/"} className="text-l font-semibold">
          Home
        </Link>
        <Link href={"/"} className="text-l font-semibold">
          About
        </Link>
        <Link href={"/"} className="text-l font-semibold">
          Products
        </Link>
      </div>

      <span>
        <Search />
      </span>
      <span className="flex">
        {cartCount > 0 ? (
          <span className="ml-3 rounded-md bg-red-500 px-[0.85em] py-[0.6em] text-[0.6rem] font-bold leading-none text-white">
            {cartCount}
          </span>
        ) : (
          ""
        )}
        <Link
          className="ml-1 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  "
          href="/pages/cart/"
        >
          <span className="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </span>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
