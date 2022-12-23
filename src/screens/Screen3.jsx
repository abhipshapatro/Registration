import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Screen3 = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className=" w-1/2 h-full mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
              <div onClick={() => setShowModal(false)} className="flex ml-auto p-3 cursor-pointer">
                <AiOutlineClose className="text-black text-xl" />
              </div>
           

              {/*body*/}
              <div className="relative p-2 flex-auto">
                <h1>Thank you!</h1>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Thank you for submitting the form 
                </p>
                <p>One of our team members  will be in touch shortly</p>
              </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Screen3;
