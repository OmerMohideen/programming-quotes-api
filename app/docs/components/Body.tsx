import Link from "next/link";
import React from "react";
import DocCode from "./DocCode";

export interface Docs {
  title: string;
  description1: string;
  code1: string;
  description2: string;
  code2: string;
  last?: boolean;
}

export const API_DOCS: Docs[] = [
  {
    title: "Random Quote",
    description1: "Get one random quote",
    code1: `fetch("https://programming-quotesapi.vercel.app/random")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    description2: "Get one random quote using the authors name",
    code2: `fetch("https://programming-quotesapi.vercel.app/random?author=Linus Torvalds")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
  },
  {
    title: "10 Random Quotes",
    description1: "Get 10 random quotes",
    code1: `fetch("https://programming-quotesapi.vercel.app/bulk")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    description2: "Get 10 random quotes using the authors name",
    code2: `fetch("https://programming-quotesapi.vercel.app/bulk?author=Linus Torvalds")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
  },
  {
    title: "Available Quotes",
    description1: "Get all available quotes",
    code1: `fetch("https://programming-quotesapi.vercel.app/available")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    description2: "Get all available quotes using the authors name",
    code2: `fetch("https://programming-quotesapi.vercel.app/available?author=Linus Torvalds")
          .then((response) => response.json())
          .then((quote) => console.log(quote));`,
    last: true,
  },
];

function Body() {
  return (
    <div
      className="container relative max-w-4xl px-2 py-16 lg:mx-auto"
      id="get-started"
    >
      <h1 className="text-4xl font-bold">Docs</h1>
      <h2 className="my-5 text-lg">
        Below you'll find examples using{" "}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          target={"_blank"}
          className="text-indigo-500 underline"
        >
          Fetch API
        </Link>{" "}
        but you can use any other http library out there.
      </h2>
      <div className="my-10 relative">
        <h3 className="text-2xl font-bold mb-4">Important Notes</h3>
        <ol className="list-disc list-inside lg:text-lg text-base">
          <li>
            Default rate limit is <i className="font-medium">100 requests</i>{" "}
            per hour.
          </li>
          <li>
            Default number of quotes returned from query endpoints is{" "}
            <i className="font-medium">10</i>.
          </li>
        </ol>
      </div>
      <hr className="mb-5" />
      <div className="my-12 space-y-12">
        {API_DOCS.map((doc) => (
          <DocCode {...doc} key={doc.title} />
        ))}
      </div>
    </div>
  );
}

export default Body;
