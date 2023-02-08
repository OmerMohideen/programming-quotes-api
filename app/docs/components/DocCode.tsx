import React from "react";
import { Docs } from "./Body";
import Codesnap from "../../components/Codesnap";

function DocCode({ title, code1, description1, code2, description2, last}: Docs) {
  return (
    <div>
      <div>
        <h2 className="lg:text-2xl text-xl font-bold mb-4 text-wavy">{title}</h2>
      <p className="py-5 lg:text-lg text-base flex items-center">
        {description1}
      </p>
      <Codesnap language="javascript" snippet={code1} />
      <p className="py-5 lg:text-lg text-base flex items-center">
        {description2}
      </p>
      <Codesnap language="javascript" snippet={code2} />
      </div>
      {!last && (
        <><hr className="mt-12" /><div></div></>
      )}
    </div>
  );
}

export default DocCode;
