import React, { useState } from "react";
import Header from "../components/Header";

const Screen2 = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />
      {/* heading */}
      <div className="my-6 flex flex-col mx-auto md:items-center md:justify-center ">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Set a Password{" "}
        </h1>
        <p className="text-gray-400 mt-2 font-semibold">Last Step</p>
      </div>

        {/* form div */}
      <div className="sm:w-1/3 mx-auto h-[70vh] flex flex-col items-center justify-between">
        {/* form inputs div */}
        <div className="w-full flex flex-col mx-auto items-center justify-center px-3 py-1 gap-4">
        
          {/* enter password */}
          <div className="w-full relative">
            <input
              type="password"
              placeholder="Enter password"
              className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
            />
            <label
              htmlFor="enter password"
              className="absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out"
            >
              Enter Password
            </label>
          </div>

          {/* repeat password */}
          <div className="w-full relative">
            <input
              type="password"
              placeholder="Repeat password"
              className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
            />
            <label
              htmlFor="repeat password"
              className="absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out"
            >
              Repeat Password
            </label>
          </div>

          {/* information */}
          <div className="w-full relative">
            <select
              placeholder="How did you hear about us?"
              className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
            >
              <option value="AngelList">AngelList</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* terms & condition */}
          <div className="w-full flex items-center gap-4">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-gray-400 font-semibold">
              I Agree{" "}
              <span className="text-orange-400">terms and conditions</span> and{" "}
              <span className="text-orange-400">privacy policy</span>
            </p>
          </div>

          {/* special offers */}
          <div className="w-full flex items-center gap-4">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-gray-400 font-semibold">
              Receive special offers
            </p>
          </div>
        </div>

        {/* register btn */}
        <div className="w-full mt-10">
          <button className="w-full border-2 focus:outline-orange-400 text-white bg-orange-400 rounded-full px-6 py-4">
            Register
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Screen2;
