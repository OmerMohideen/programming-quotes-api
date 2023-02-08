"use client";
import React from "react";
import Link from "next/link";
import BackgroundSVG from "./BackgroundSVG";

function Header() {
  return (
    <div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Programming Quotes API
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A free restful API serving quality programming quotes by
                programmers
              </p>
              <p className="leading-8 text-gray-600">
                Powered by{" "}
                <Link
                  href="https://koajs.com/"
                  target={"_blank"}
                  className="text-indigo-500 underline hover:text-indigo-600"
                >
                  Koa.js
                </Link>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6"><a href="#get-started">
                <button className="rounded-md hover:shadow-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </button>
</a>
                <Link
                  href="/docs"
                  className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-700"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <BackgroundSVG />
        </div>
      </main>
    </div>
  );
}

export default Header;
