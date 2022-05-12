import React, { useState } from "react";


export default function Header() {
  const [ openMenu, setOpenMenu ] = useState("false")


  const handleOpenMenu = () => {
    if(openMenu === "false") setOpenMenu("true")
    if(openMenu === "true") setOpenMenu("false")
  }



  return (
    <header className="flex mt-6 px-6 h-8 justify-between items-center relative max-w-screen-lg mx-auto">
      <div className="w-28">
        <img src="../images/logo.svg" alt="shortly logo" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 lg:hidden"
        viewBox="0 0 20 20"
        fill="var(--Grayish-Violet)"
        aria-controls="dropdownMenu"
        aria-label="open menu"
        onClick={handleOpenMenu}
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>

        <ul id="dropdownMenu" display={openMenu} aria-label="dropdown menu" className="hidden flex-col absolute top-14 inset-x-8 w-10/12 bg-custom-violet text-white rounded-lg text-center gap-3 pt-6 pb-8 left-8 lg:flex lg:flex-row lg:relative lg:w-full lg:h-full lg:p-0 lg:top-0 lg:flex lg:justify-start lg:bg-transparent lg-color-custom-gray lg:items-center">
          <li className="">
            <button className="py-2 px-3 lg:hover:text-black">Features</button>
            </li>
          <li className="border-white">
            <button className="py-2 px-3 lg:hover:text-black">Pricing</button>
            </li>
          <li className="" >
            <button id="resources" className="pb-7 w-10/12 pt-2 px-3 lg:p-0 lg:hover:text-black">Resources</button>
            </li>
          <li className="lg:ml-80 ">
            <button className="py-2 px-3 lg:hover:text-black">Login</button>
            </li>
          <li className="">
            <button className=" py-2 w-10/12 rounded-3xl bg-custom-btn lg:w-24 text-white hover:opacity-50">
              Sign up
            </button>
          </li>
        </ul>

    </header>
  );
}
