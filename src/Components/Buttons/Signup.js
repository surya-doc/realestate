import React from 'react'

function Signup() {
  return (
    <div className='flex items-center'>
        <div className='signup flex justify-center items-center px-8 py-2 rounded-md font-semibold cursor-pointer md:hidden xl:px-6 xl:py-1' style={{color: "#FFF", backgroundColor: "#7066ef"}}>
            Sign up
        </div>
        <div className="sm-screen hidden md:flex items-center mx-4 font-semibold sm:text-sm sm:mx-1">
            Sign up
        </div>
    </div>
  )
}

export default Signup