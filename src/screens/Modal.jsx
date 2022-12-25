import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  let navigate = useNavigate();
  const handleModalOnClick = () => {
    navigate('/')
  }
  return (
    <>
      <div id="defaultModal" className="w-full h-[50vh] sm:h-full sm:flex mx-auto sm:justify-center sm:items-center bg-gray-400  overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none py-2">
        {/*content*/}
        <div className="md:w-[50vw] h-[50vh] border-0 rounded-t-3xl sm:rounded-3xl shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">

          <div className="flex ml-auto px-10 py-10 cursor-pointer">
            <AiOutlineClose onClick={handleModalOnClick} size={30} className="text-gray-400 text-xl" />
          </div>

          {/*body*/}
          <div className="relative  flex flex-col items-center justify-center ">
            <h1 className="text-3xl sm:text-6xl flex mx-auto items-center justify-center text-indigo-500 font-extrabold">Thank you!</h1>
            <p className="mt-12 text-md sm:text-xl flex items-center justify-center text-slate-400 font-semibold">
              Thank you for submitting the form
            </p>
            <p className="mt-2 text-md sm:text-xl flex items-center justify-center text-slate-400 font-semibold">One of our team members will be in touch shortly</p>
          </div>
        </div>

      </div>
      <div className="bg-opacity-25 fixed inset-0 z-20 bg-black"></div>
    </>
  );
};

export default Modal;