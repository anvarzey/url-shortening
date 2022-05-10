import React from "react";

export default function LowerBanner() {

  return (
    <div className="bg-custom-violet h-60 flex flex-col justify-center items-center gap-4 bg-boost">
      <h3 className="text-white text-2xl font-bold lg:text-3xl">
        Boost your links today
      </h3>
      <button className="bg-custom-btn text-white py-3 px-11 rounded-3xl font-bold lg:mt-2 btn-hover relative">
        Get Started
      </button>
    </div>
  )
}