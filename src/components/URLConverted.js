import React from "react";

export default function URLConverted({ urlID, original, shortened }) {
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

  const handleDeletion = (event) => {
    let storageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      const itemSplitted = item.split(",");
      storageArray.push([key, ...itemSplitted]);
    }

    const indexElementToDelete = storageArray.findIndex(
      (element) =>
        element[2] === event.target.parentElement.previousSibling.innerHTML
    );

    storageArray.splice(indexElementToDelete, 1);

    localStorage.clear();

    for (let i = 0; i < storageArray.length; i++) {
      localStorage.setItem(
        storageArray[i][0],
        storageArray[i][1] + "," + storageArray[i][2]
      );
    }

     event.target.parentNode.parentNode.parentNode.remove();
  };

  return (
    <div className="flex flex-col w-10/12 lg:flex-row py-3 lg:justify-between lg:px-7 items-center max-w-screen-lg lg:w-full lg:h-16 bg-white rounded-md mx-auto mt-4 z-50 text-sm lg:text-base relative">
      <div className=" w-full pb-2 px-4 border-b lg:border-none lg:p-0 lg:inline-block truncate">
        {original}
      </div>
      <div className="flex lg:gap-6 w-full gap-2 pt-2 px-4 lg:p-0 lg:items-center lg:flex-row lg:justify-end flex-col">
        <div className="inline-block color-custom-cyan">{shortened}</div>
        <button
          onClick={copyToClipboard}
          id="copyBtn"
          className="inline-block py-2 lg:py-0 bg-custom-btn lg:w-24 lg:h-9 rounded-lg text-white hover:opacity-50"
        >
          Copy
        </button>
        <button onClick={handleDeletion} id="delete-btn" className="delete-btn">
          Delete
        </button>
        <label
          className="delete-label flex items-center justify-center absolute rounded-full text-white"
          htmlFor="delete-btn"
        >
          X
        </label>
      </div>
    </div>
  );
}
