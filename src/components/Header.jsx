import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { AiTwotoneMessage } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='w-full h-full mx-auto'>
      {/* header */}
      <div className='flex items-center justify-between'>
        {/* back to home */}
        <div className='flex items-center gap-2 cursor-pointer text-indigo-500'><HiArrowLeft className='md:hidden text-indigo-500' /> Back to home</div>
        {/* need help? */}
        <div className='flex items-center gap-2 cursor-pointer text-indigo-500'><AiTwotoneMessage className='text-indigo-500' /> Need help?</div>
      </div>
    </div>
  )
}

export default Header