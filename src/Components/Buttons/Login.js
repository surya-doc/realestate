import React from 'react'

function Login() {
  return (
    <div className='flex items-center'>
        <div className='login md:hidden flex items-center justify-center rounded-md px-8 py-1 font-semibold cursor-pointer xl:py-1 xl:px-6' style={{border: "3px solid #eae9f1", color: "#7066ef"}}>
            Login
        </div>
        <div className="sm-screen hidden md:flex items-center font-semibold sm:text-sm">
            Login
        </div>
    </div>
  )
}

export default Login