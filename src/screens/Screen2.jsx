import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "./Modal";

const Screen2 = () => {

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('')

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: '',
    confirmPassword: ''
  })

  const handlePasswordChange = (event) => {

    const passwordInputValue = event.target.value.trim();
    // console.log(passwordInputValue);
    const passwordInputFieldName = event.target.name;
    const NewPasswordInput = { ...passwordInput, [passwordInputFieldName]: passwordInputValue }
    setPasswordInput(NewPasswordInput);

  }
  const handleValidation = (event) => {

    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;

    //for password 
    if (passwordInputFieldName === 'password') {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);

      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordError(errMsg);
    }

    // for confirm password
    if (passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)) {

      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  }

  const handleSelectChange = (event) => {
    setSelected(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true)
  }


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
      <form onSubmit={handleSubmit} className="sm:w-1/3 mx-auto h-[70vh] flex flex-col items-center justify-between">
        {/* form inputs div */}
        <div className="w-full flex flex-col mx-auto items-center justify-center px-3 py-1 gap-4">

          {/* enter password */}
          <div className="w-full relative">
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="peer placeholder:text-transparent w-full border-2 hover:border-indigo-500 focus:outline-indigo-500 rounded-full px-6 py-4"
              value={passwordInput.password}
              onChange={handlePasswordChange}
              onKeyUp={handleValidation}
            />
            <label
              htmlFor="enter password"
              className="absolute text-gray-300 text-sm font-semibold -top-3 left-6 peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-indigo-500 transition-all duration-300 ease-in-out"
            >
              Enter Password
            </label>
            <p className="text-red-400 text-sm">{passwordError}</p>
          </div>

          {/* confirm password */}
          <div className="w-full relative">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Repeat password"
              className="peer placeholder:text-transparent w-full border-2 hover:border-indigo-500 focus:outline-indigo-500 rounded-full px-6 py-4"
              value={passwordInput.confirmPassword}
              onChange={handlePasswordChange}
              onKeyUp={handleValidation}
            />
            <label
              htmlFor="repeat password"
              className="absolute text-gray-300 text-sm font-semibold -top-3 left-6 peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-indigo-500 transition-all duration-300 ease-in-out"
            >
              Repeat Password
            </label>
            <p className="text-red-400 text-sm">{confirmPasswordError}</p>
          </div>

          {/* information */}
          <div className="w-full relative">
            <select
              defaultValue={selected}
              onChange={handleSelectChange}
              className="peer placeholder:text-transparent w-full border-2 hover:border-indigo-500 focus:outline-indigo-500 rounded-full px-6 py-4"
            >
              <option value="" hidden> How did you hear about us? </option>
              <option value="AngelList">AngelList</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* terms & condition */}
          <div className="w-full flex items-center gap-4">
            <input checked type="checkbox" className="w-4 h-4" />
            <p className="text-gray-400 font-semibold">
              I Agree{" "}
              <span className="text-indigo-500">terms and conditions</span> and{" "}
              <span className="text-indigo-500">privacy policy</span>
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
          <button type="submit" className="w-full border-2 hover:border-indigo-500 focus:outline-indigo-500 text-white bg-indigo-500 rounded-full px-6 py-4">
            Register
          </button>
        </div>
      </form>
      {showModal && <Modal />}
    </div>
  );
};

export default Screen2;
