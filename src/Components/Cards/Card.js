import React from 'react';
import './Card.css';

function Card({item}) {
  return (
    <div className="card bg-white shadow-lg rounded-xl" style={{maxWidth: "100vw"}}>
        <div className="card-header">
            <img style={{borderRadius: "14px 14px 0px 0px", maxHeight: "35vh", width: "100%"}} src={item.image} alt="" />
        </div>
        <div className="card-footer px-4 py-4">
            <div>
                <div className="rent flex justify-between items-center">
                    <h2 className='text-xl font-bold'><span style={{color: "#7066ef"}}>${item.price}</span><span className='text-color text-sm pl-1 font-semibold'>/month</span></h2>
                    <div className="save p-2 m-4 rounded-full" style={{border: "2px solid #eae9f1"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7066ef" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
                <div className="name text-2xl font-bold -top-4 relative">{item.name}</div>
                <div className="address text-sm py-1 font-semibold">
                    <p className='text-color -top-2 relative'>{item.zip} {item.address}</p>
                </div>
                <div className='mx-1 my-2' style={{minHeight: "2px", maxHeight: "2px", minWidth: "full", maxWidth: "full", backgroundColor: "#eae9f1"}}></div>
                <div className="details flex justify-between py-2 items-center">
                    <div className="beds flex items-center gap-2">
                        <i style={{color: "#7066ef"}} class="fa fa-bed"></i>
                        <p className='text-color text-sm font-semibold'>{item.beds} Beds</p>
                    </div>
                    <div className="bathroom flex items-center gap-2">
                        <i style={{color: "#7066ef"}} class="fa fa-bath"></i>
                        <p className='text-color text-sm font-semibold'>{item.baths} Bathrooms</p>
                    </div>
                    <div className="beds flex items-center gap-1">
                        <i style={{color: "#7066ef"}} class="fa fa-square"></i>
                        <p className='text-color text-sm font-semibold'>{item.sqm.split('*')[0]}<span>×</span>{item.sqm.split('*')[1]} m<span className='pb-2 text-xs -top-1 relative'>2</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card