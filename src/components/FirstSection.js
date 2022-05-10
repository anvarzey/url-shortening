import React from "react";

export default function FirstSection() {
  return (
    <section className="mt-10 lg:grid lg:grid-cols-2  max-w-screen-lg mx-auto max-h-max lg:justify-start">
      <div className="h-96' lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:h-max lg:row-end-4 lg:relative lg:left-16 lg:w-max">
        <img
          className="object-cover h-80 object-left pl-7  lg:pl-0 lg:w-full"
          src="../images/illustration-working.svg"
          alt="woman working"
        />
      </div>
      <h1 className="w-4/5 text-4xl font-bold mx-auto text-center mt-10 color-custom-blue lg:col-start-1 lg:col-end-2 lg:text-6xl lg:text-left lg:mt-0 lg:ml-0 lg:w-full lg:h-36 lg:self-end lg:leading-tight">
        More than just shorter links
      </h1>
      <p className="w-11/12 color-custom-gray-violet mx-auto text-center lg:text-left text-lg leading-7 mt-3 lg:col-start-1 lg:col-end-2 lg:ml-0 lg:mt-2 lg:h-12 lg:w-10/12">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="bg-custom-btn text-white w-1/2 py-3 rounded-3xl mt-8 mx-auto block lg:col-start-1 lg:col-end-2 max-h-12 lg:ml-0 lg:w-40 lg:mt-0 hover:opacity-50">
        Get Started
      </button>
    </section>
  );
}
