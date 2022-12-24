import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Screen3 = () => {
  const [showModal, setShowModal] = useState(true);
  const handleModalOnClick = () => {
    setShowModal(false)
    
  }
  return (
    <>
      <div className=" w-full h-full mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        {/*content*/}
        <div className="w-[50vw] h-[50vh] border-0 rounded-3xl shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">

          <div className="flex ml-auto px-10 py-10 cursor-pointer">
            <AiOutlineClose onClick={handleModalOnClick} size={30}  className="text-black text-xl" />
          </div>

          {/*body*/}
          <div className="relative p-2 flex flex-col items-center justify-center">
            <h1 className="text-6xl flex mx-auto items-center justify-center text-orange-600 font-extrabold">Thank you!</h1>
            <p className="mt-12 text-xl flex items-center justify-center text-slate-400 font-semibold">
              Thank you for submitting the form
            </p>
            <p className=" mt-2 text-xl flex items-center justify-center text-slate-400 font-semibold">One of our team members  will be in touch shortly</p>
          </div>
        </div>
      </div>
      <div className="bg-opacity-25 fixed inset-0 z-40 bg-orange-300"></div>
    </>
  );
};

export default Screen3;
