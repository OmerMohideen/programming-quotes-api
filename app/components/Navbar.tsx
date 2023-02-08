import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import GithubIcon from "./GithubIcon";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0 md:flex-1">
            <Link href="/">
              <span className="sr-only">Programming Quotes API</span>
              <h1 className="text-xl md:text-2xl text-indigo-600 hover:text-indigo-800 font-display font-bold text-shadow-md">
                Programming Quotes
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:space-x-10 space-x-8 pr-5">
            <Link
              href="https://github.com/OmerMohideen/programming-quotes-api"
              target={"_blank"}
              className="grid grid-cols-2 items-center w-14 text-base font-medium text-gray-500 hover:text-gray-900 group"
            >
              <GithubIcon/>
              Github
            </Link>

            <Link
              href="/docs"
              className="grid grid-cols-2 items-center w-12 sm:w-14 text-base font-medium text-gray-500 hover:text-gray-900 group"
            >
              <DocumentTextIcon
                className="h-5 w-5 flex-shrink-0 text-indigo-600 group-hover:text-indigo-800"
                aria-hidden="true"
              />
              Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
