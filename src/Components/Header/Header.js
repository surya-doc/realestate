import React, { useState } from 'react';
import Login from '../Buttons/Login';
import Signup from '../Buttons/Signup';
import './Header.css';

function Header() {

    const[shoeItem, setShowItem] = useState(false);

  return (
    <div>
        <div className="header py-6 px-6 flex justify-between shadow-md lg:py-2 xl:py-2">
            <div className="left flex gap-10 items-center lg:gap-4">
                
                <div className="menu hidden md:block" onClick={() => setShowItem(!shoeItem)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <div className="logo flex gap-2 items-center mr-8 lg:m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-9" viewBox="0 0 20 20" fill="#7066ef">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <h2 className='text-2xl font-semibold'>Estatery</h2>
                </div>
                <div className='ele md:hidden'>
                    <h3 className='text-md font-semibold'>Rent</h3>
                </div>
                <div className='ele md:hidden'>
                    <h3 className='text-md font-semibold'>Buy</h3>
                </div>
                <div className='ele md:hidden'>
                    <h3 className='text-md font-semibold'>Sell</h3>
                </div>
                <div className='ele md:hidden flex gap-2 items-center'>
                    <h3 className='text-md font-semibold'>Manage Property</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className='ele md:hidden flex gap-2 items-center'>
                    <h3 className='text-md font-semibold'>Resources</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            <div className="right flex gap-6 xl:flex-col xl:gap-1 md:flex-row">
                <Login />
                <Signup />
            </div>
        </div>

        <div className="sm-screen-nav-items hidden md:block">
            <div className='py-6 items-center justify-between px-4 sm:flex-col' style={{display: shoeItem ? "flex" : "none", backgroundColor: "#f8f7fd"}}>
                <div className='ele'>
                    <h3 className='text-md font-semibold'>Rent</h3>
                </div>
                <div className='ele'>
                    <h3 className='text-md font-semibold'>Buy</h3>
                </div>
                <div className='ele'>
                    <h3 className='text-md font-semibold'>Sell</h3>
                </div>
                <div className='ele flex gap-2 items-center'>
                    <h3 className='text-md font-semibold'>Manage Property</h3>
                </div>
                <div className='ele flex gap-2 items-center'>
                    <h3 className='text-md font-semibold'>Resources</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header