import React from "react";

export default function URLConverted({ urlID, original, shortened, handleDelete }) {
  const copyToClipboard = (e) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      e.target.innerHTML = "Copied!";
      e.target.classList.replace("bg-custom-btn", "bg-custom-copied");
      setTimeout(() => {
        e.target.innerHTML = "Copy";
        e.target.classList.replace("bg-custom-copied", "bg-custom-btn");
      }, 2000);
      return navigator.clipboard.writeText(shortened);
    }
    return Promise.reject("The Clipboard API is not available.");
  };
 
  return (
    <div className="flex flex-col w-10/12 lg:flex-row py-5 lg:justify-between lg:px-7 items-center max-w-screen-lg lg:w-full lg:h-16 bg-white rounded-md mx-auto mt-4 z-50 text-sm lg:text-base relative">
      <div className="text-center w-full pb-2 px-4 border-b lg:text-left lg:border-none lg:p-0 lg:inline-block truncate">
        {original}
      </div>
      <div className="flex lg:gap-6 w-full gap-2 pt-2 px-4 lg:p-0 lg:items-center lg:flex-row lg:justify-end flex-col">
        <div className="text-center inline-block color-custom-cyan lg:text-left">{shortened}</div>
        <button
          onClick={copyToClipboard}
          id="copyBtn"
          className="inline-block py-2 mt-2 lg:mt-0 lg:py-0 bg-custom-btn lg:w-24 lg:h-9 rounded-lg text-white hover:opacity-50"
        >
          Copy
        </button>
        <button onClick={() => handleDelete(urlID)} id="delete-btn" className="delete-btn hidden lg:block">
          Delete
        </button>
        <button
          className="delete-label flex items-center justify-center absolute rounded-full text-white lg:hidden"
          onClick={() => handleDelete(urlID)}
        >
          X
        </button>
      </div>
    </div>
  );
}
