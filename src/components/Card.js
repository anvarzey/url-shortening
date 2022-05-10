import React from "react";

export default function Card( { id, image, title, paragraph } ) {
  let clases = "relative container flex flex-col items-center justify-center bg-white w-10/12 h-64 mx-auto gap-4 mt-20 rounded-md lg:w-80 max-h-96 lg:items-start lg:pl-9 z-10"

  if (id === 0) clases += " lg:self-start lg:ml-0"
  if (id === 1) clases += " lg:self-center"
  if (id === 2) clases += " lg:self-end lg:mr-0"

  return (
    <div className={clases}>
      <div className="absolute flex items-center justify-center -top-9 left-2/4 -translate-x-2/4 w-20 h-20 rounded-full bg-custom-violet lg:left-1/4">
        <img className="" src={image} alt="" />
      </div>
      <h3 className="text-center text-xl font-bold mt-10 color-custom-blue lg:text-left">{title}</h3>
      <p className="text-center color-custom-gray-violet text-sm w-10/12 leading-6 lg:text-left">
        {paragraph}
      </p>
    </div>
  );
}
