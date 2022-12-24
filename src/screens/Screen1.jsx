import React from "react";
import Header from "../components/Header";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import PhoneInput from "react-phone-input-2";

const validateForm = (userInput) => {
  const errors = {};

  if (!userInput.firstName) {
    errors.firstName = "Please Enter First Name";
  } else if (userInput.firstName.length > 10) {
    errors.firstName = "Name cannot exceed 10 characters";
  }

  if (!userInput.lastName) {
    errors.lastName = "Please Enter Last Name";
  } else if (userInput.lastName.length > 10) {
    errors.lastName = "Last Name cannot exceed 10 characters";
  }

  if (!userInput.email) {
    errors.email = "Please Enter Email address";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInput.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!userInput.mobile) {
    errors.mobile = "Required";
  }

  return errors;
};

const Screen1 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Header />

      {/* heading */}
      <div className="my-6 flex flex-col mx-auto md:items-center md:justify-center ">
        <h1 className="text-3xl text-gray-800 font-semibold">Registration </h1>
        <p className="text-gray-400 mt-2 font-semibold">
          Leave your contact details
        </p>
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className="sm:w-1/3 flex flex-col mx-auto items-center justify-center px-3 py-1 gap-4"
      >
        {/* name input */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* first name input */}
          <div className="w-full relative">
            <input
              name="firstName"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First name"
              className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
            />
            <label
              htmlFor="first name"
              className="absolute text-gray-300 text-sm font-semibold left-6  peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out"
            >
              First name
            </label>
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className="text-red-400 text-sm">
                {formik.errors.firstName}
              </span>
            ) : null}
          </div>

          {/* last name input */}
          <div className="w-full relative">
            <input
              name="lastName"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Last name"
              className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
            />
            <label
              htmlFor="last name"
              className="absolute text-gray-300 text-sm font-semibold left-6 peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out"
            >
              Last name
            </label>
            {formik.touched.lastName && formik.errors.lastName ? (
              <span className="text-red-400 text-sm">
                {formik.errors.lastName}
              </span>
            ) : null}
          </div>
        </div>

        {/* email address input */}
        <div className="w-full relative">
          <input
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Email Address"
            className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4"
          />
          <label
            htmlFor="email"
            className="absolute text-gray-300 text-sm font-semibold left-6 peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out"
          >
            Your email address
          </label>
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
          ) : null}
        </div>
        {/* Phone number */}
        <div className="w-full relative">
          <PhoneInput
            className="peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full "
            inputStyle={{
              borderRadius: 30,

              width: "100%",
              ".PhoneInputInput": {
                "&:focus-visible": {
                  outline: "none",
                },
              },
            }}
            buttonStyle={{
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
            }}
            inputExtraProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            country={"in"}
            placeholder="Enter your phone"
            isValid={(value, country) => {
              if (value.match(/12345/)) {
                return "Invalid value: " + value + ", " + country.name;
              } else if (value.match(/1234/)) {
                return false;
              } else {
                return true;
              }
            }}
            name="mobile"
            id="mobile"
            value={formik.values.mobile}
            onBlur={() =>
              !formik.touched.mobile &&
              formik.setFieldTouched("mobile", true, true)
            }
            onChange={formik.handleChange}
          />
          {formik.errors.mobile && formik.touched.mobile ? (
            <span className="text-red-400 text-sm">{formik.errors.mobile}</span>
          ) : null}
        </div>

        {/* Next button */}
        <div className="w-full mt-10">
          <button
            type="submit"
            className="w-full border-2 focus:outline-orange-400 text-white bg-orange-400 rounded-full px-6 py-4"
          >
            Next
          </button>
        </div>

        {/* divider */}
        <div className="w-full flex items-center justify-center my-auto gap-2">
          <div className="border-b-2  border-gray-300 w-full"></div>
          <div>or</div>
          <div className="border-b-2  border-gray-300 w-full"></div>
        </div>

        {/* google btn */}
        <div className="w-full">
          <button className="w-full flex items-center justify-center gap-4 border-2 focus:outline-orange-400 rounded-full px-6 py-4">
            <FcGoogle />{" "}
            <span className="text-base text-gray-800 font-semibold">
              With Google
            </span>{" "}
          </button>
        </div>

        {/* facebook btn */}
        <div className="w-full">
          <button className="w-full flex items-center justify-center gap-4 border-2 focus:outline-orange-400 rounded-full px-6 py-4">
            <FaFacebook className="text-[#3b5998]" />{" "}
            <span className="text-base text-gray-800 font-semibold">
              With Facebook
            </span>
          </button>
        </div>

        {/* sign in */}
        <div className="w-full flex items-center justify-center">
          <p className="text-gray-400 mt-2 font-semibold">
            Already have an account?{" "}
            <span className="text-orange-400">Sign In</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Screen1;