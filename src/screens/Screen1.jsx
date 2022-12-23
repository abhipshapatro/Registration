import React from 'react'
import Header from '../components/Header'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'


const validateEmployee = empData => {
  const errors = {};

  if (!empData.Name) {
    errors.Name = 'Please Enter Employee Name';
  } else if (empData.Name.length > 20) {
    errors.Name = 'Name cannot exceed 20 characters';
  }

  if (!empData.Location) {
    errors.Location = 'Please Enter Employee Location';
  } 

  if (!empData.EmailId) {
    errors.EmailId = 'Please Enter Email ID';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
    errors.EmailId = 'Invalid email address';
  }

  return errors;
};


const Screen1 = () => {

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
    },
    validate: validateEmployee,
    onSubmit: values => {
      alert(JSON.stringify(values))
    }
  })
  return (
    <div>
        <Header />

        {/* heading */}
        <div className='my-6 flex flex-col mx-auto md:items-center md:justify-center '>
            <h1 className='text-3xl text-gray-800 font-semibold'>Registration </h1>
            <p className='text-gray-400 mt-2 font-semibold'>Leave your contact details</p>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className='sm:w-1/3 flex flex-col mx-auto items-center justify-center px-3 py-1 gap-4'>

            {/* name input */}
            <div className='w-full flex flex-col md:flex-row gap-4'>
                {/* first name input */}
                <div className='w-full relative'>
                  <input type="text" value={formik.values.firstName} placeholder='First name' className='peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4' />
                  <label htmlFor="first name" className='absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out'>First name</label>
                </div>

                {/* last name input */}
                <div className='w-full relative'>
                  <input type="text" value={formik.values.lastName} placeholder='Last name' className='peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4' />
                  <label htmlFor="last name" className='absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out'>Last name</label>
                </div>
            </div>

            {/* email address input */}
            <div className='w-full relative'>
              <input type="text" value={formik.values.email} placeholder='Your Email Address' className='peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4' />
              <label htmlFor="email" className='absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out'>Your email address</label>
            </div>

            {/* phone input */}
            <div className='w-full relative'>
              <input type="text" value={formik.values.phone} placeholder='Your Phone' className='peer placeholder:text-transparent w-full border-2 focus:outline-orange-400 rounded-full px-6 py-4' />
              <label htmlFor="phone" className='absolute text-gray-300 text-sm font-semibold peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-focus:-top-3 z-10 bg-white px-2 peer-focus:text-orange-600 transition-all duration-300 ease-in-out'>Your phone</label>
            </div>

            {/* Next button */}
          <Link to={"/password"} className='w-full mt-10'>
            <button className='w-full border-2 focus:outline-orange-400 text-white bg-orange-400 rounded-full px-6 py-4'>Next</button>
          </Link>

          {/* divider */}
          <div className='w-full flex items-center justify-center my-auto gap-2'>
            <div className='border-b-2  border-gray-300 w-full'></div>
            <div>or</div>
            <div className='border-b-2  border-gray-300 w-full'></div>
          </div>

          {/* google btn */}
          <div className='w-full'>
            <button className='w-full flex items-center justify-center gap-4 border-2 focus:outline-orange-400 rounded-full px-6 py-4'><FcGoogle /> <span className='text-base text-gray-800 font-semibold'>With Google</span> </button>
          </div>

          {/* facebook btn */}
          <div className='w-full'>
            <button className='w-full flex items-center justify-center gap-4 border-2 focus:outline-orange-400 rounded-full px-6 py-4'><FaFacebook className='text-[#3b5998]' /> <span className='text-base text-gray-800 font-semibold'>With Facebook</span></button>
          </div>

          {/* sign in */}
          <div className='w-full flex items-center justify-center'>
            <p className='text-gray-400 mt-2 font-semibold'>Already have an account? <span className='text-orange-400'>Sign In</span></p>
          </div>

        </form>

        
    </div>
  )
}

export default Screen1