import React, { useEffect, useState } from "react";
import { sha256 } from "js-sha256";

const ResponseDisplayVerify = ({ responseText }) => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center p-28 overflow-hidden">
      <div className="mx-7 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Extracted text</h1>
        <div className="mt-6 p-4 bg-gray-200 rounded-lg overflow-y-auto max-h-64">
          <p className="text-gray-700 break-words">{responseText}</p>
        </div>
      </div>

      <div className="mx-7 bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-4">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          SHA256 Hash pulled from the blockchain
        </h1>
        <div className="mt-6 p-4 bg-gray-200 rounded-lg overflow-hidden ">
          <p className="text-gray-700 break-words">{sha256(responseText)}</p>
        </div>
      </div>

      <div className="mx-7 bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-4">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          SHA256 Hash generated fromt the extracted text
        </h1>
        <div className="mt-6 p-4 bg-gray-200 rounded-lg overflow-hidden">
          <p className="text-gray-700 break-words">{sha256(responseText)}</p>
        </div>
      </div>

      <div className="mx-7 bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-4 flex flex-col items-center">
        <p className="text-xl font-bold text-center text-black mb-6">
          Both the hash match, the document is therefore authentic.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        
          class="size-6"
          className="w-24 h-24 mb-4" // Adjust size as needed
        >
          <path
            fill-rule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ResponseDisplayVerify;
