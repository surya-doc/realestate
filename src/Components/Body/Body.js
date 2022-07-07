import React, { useState } from 'react';
import Card from '../Cards/Card';
import usa from '../../Data/Data';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OutsideClickHandler from 'react-outside-click-handler';
import './Body.css';

function Body() {
  const[realEstate, setRealEstate] = useState(usa);
  const[openCalender, setOpenCalender] = useState(false);
  const[openPrice, setOpenPrice] = useState(false);
  const[location, setLocation] = useState('usa');
  const[type, setType] = useState();
  const[dt, setDate] = useState(new Date()); 
  const[minPrice, setMinPrice] = useState(0);
  const[maxPrice, setMaxPrice] = useState(10000);
  const[smallScreenFilter, setSmallScreenFilter] = useState(false);

  function get_unique_elements(arr){
    let output_arr = Array.from(new Set(arr));
    return output_arr
  }
  function search(ele){
    ele.preventDefault();
    let filtered_data = usa.filter(function(item){
      return item.address.toLowerCase().includes(location.toLowerCase()) && item.type.toLowerCase().includes(type.toLowerCase()) && item.price >= minPrice && item.price <= maxPrice;
    }
    );
    filtered_data = filtered_data.filter(function(item){
      console.log(new Date(item.movein).getTime() >= dt.getTime());
      return (new Date(item.movein).getTime() >= dt.getTime());
    }
    );
    console.log(filtered_data);
    setRealEstate(filtered_data);
    setSmallScreenFilter(false);
  }
  return (
    <div className="body px-28 py-6 md:px-4 relative">
        <div className='flex justify-between md:flex-col md:items-center md:gap-6'>
            <h1 className='text-4xl font-extrabold md:text-2xl'>Search properties to rent</h1>
            <div className='flex items-center gap-8 px-4 rounded-lg' style={{backgroundColor: "#FFF", border: "3px solid #eae9f1"}}>
                <h2 className='font-bold'>Search with Search bar</h2>
                <div className='p-1 rounded-full' style={{backgroundColor: "#f2f2f2"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="filter md:hidden bg-white mt-10">
          <form onSubmit={search} className="flex justify-between items-center px-8 shadow-md py-2">
            <div className='location-filter w-1/4'>
              <select className='w-full px-4 py-2 rounded-lg bg-white border-2 border-gray-300' onChange={(e) => setLocation(e.target.value)}>
                <option value="">Location</option>
                {get_unique_elements(usa.map(item => item.address)).map((item, index) => {
                  return <option key={index} value={item}>{item}</option>
                }
                )}
              </select>
            </div>

            <div className='mx-6 my-2' style={{minHeight: "40px", maxHeight: "40px", minWidth: "2px", maxWidth: "2px", backgroundColor: "#eae9f1"}}></div>

            <div className='date-filter w-1/4' onClick={() => setOpenCalender(!openCalender)}>
              <div className='flex bg-white justify-between'>
                <h2>{dt ? dt.toLocaleDateString() : "When"}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7066ef" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
                <div style={{display: openCalender ? "block" : "none", zIndex: "999", position: "absolute"}}>
              <OutsideClickHandler onOutsideClick={() => setOpenCalender(false)}>
                  <Calendar onChange={setDate} value={dt} />
              </OutsideClickHandler>
                </div>
            </div>

            <div className='mx-6 my-2' style={{minHeight: "40px", maxHeight: "40px", minWidth: "2px", maxWidth: "2px", backgroundColor: "#eae9f1"}}></div>

            <div className='price-filter flex w-1/4 relative justify-between items-center' onClick={() => setOpenPrice(!openCalender)}>
              <p>{minPrice ? `${'$'+minPrice+'-'+'$'+maxPrice}` : "Price"}</p>
              <div className='p-1 rounded-full' style={{backgroundColor: "#f2f2f2"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
              </div>
              <OutsideClickHandler onOutsideClick={() => setOpenPrice(false)}>
                <div className='flex items-center gap-2 border-gray-1 py-20 shadow-md px-8 -left-10 top-6' style={{display: openPrice ? "flex" : "none", position: "absolute", backgroundColor: "#eae9f1"}}>
                  <input className='price-input w-24 p-2 rounded-sm' type="number" placeholder='min' onChange={(ele) => setMinPrice(ele.target.value)} />
                  <div>-</div>
                  <input className='price-input w-24 p-2 rounded-sm' type="number" placeholder='max' onChange={(ele) => setMaxPrice(ele.target.value)} />
                </div>
              </OutsideClickHandler>
            </div>

            <div className='mx-6 my-2' style={{minHeight: "40px", maxHeight: "40px", minWidth: "2px", maxWidth: "2px", backgroundColor: "#eae9f1"}}></div>

            <div className='type-filter w-1/4'>
              <select className='w-full px-4 py-2 rounded-lg bg-white border-2 border-gray-300' onChange={(e) => setType(e.target.value)}>
                <option value="">{type ? type : "Type"}</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
              </select>
            </div>

            <div className='mx-6 my-2' style={{minHeight: "40px", maxHeight: "40px", minWidth: "2px", maxWidth: "2px", backgroundColor: "#eae9f1"}}></div>

            <div className='w-1/4 flex justify-center items-center'>
              <button type='submit' className='btn w-2/4 xl:w-3/5 lg:w-4/5 text-lg font-semibold py-2 px-2 rounded-md' style={{backgroundColor: "#7066ef", color: "#FFF"}}>Search</button>
            </div>
          </form>
        </div>




        {/* filter for small screen */}
        <div className='hidden md:flex justify-center'>
          <div className='flex items-center gap-8 px-4 rounded-lg my-2' onClick={() => setSmallScreenFilter(!smallScreenFilter)} style={{backgroundColor: "#FFF", border: "3px solid #eae9f1"}}>
            <h1>Filter</h1>
            <div className='p-1 rounded-full' style={{backgroundColor: "#f2f2f2"}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
          </div>
        </div>
        <div className="filter-for-small-screen hidden bg-white mt-10 md:block">
          <div className='bg-white' style={{display: smallScreenFilter ? "block" : "none", position: "fixed", width: "100vw", height: "full", zIndex: "999", minHeight: "100vh", top: "0", left: "0"}}>
            <form onSubmit={search} className="flex justify-between items-center px-8 flex-col gap-4">
              <div className='location-filter w-3/4  xxs:py-2 py-4' >
                <select className='w-full px-4 py-2 rounded-lg bg-white border-2 border-gray-300' onChange={(e) => setLocation(e.target.value)}>
                  <option value="">Location</option>
                  {get_unique_elements(usa.map(item => item.address)).map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                  }
                  )}
                </select>
              </div>

              <div className='mx-6 my-2 xxs:my-1' style={{minHeight: "2px", maxHeight: "2px", minWidth: "100vw", maxWidth: "100vw", backgroundColor: "#eae9f1"}}></div>

              <div className='date-filter w-3/4 py-4 xxs:py-2  px-4'  onClick={() => setOpenCalender(!openCalender)}>
                <div className='flex bg-white justify-between'>
                  <h2>{dt ? dt.toLocaleDateString() : "When"}</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7066ef" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                  <div style={{display: openCalender ? "block" : "none", zIndex: "999"}}>
                <OutsideClickHandler onOutsideClick={() => setOpenCalender(false)}>
                    <Calendar onChange={setDate} value={dt} />
                </OutsideClickHandler>
                  </div>
              </div>

              <div className='mx-6 my-2 xxs:my-1' style={{minHeight: "2px", maxHeight: "2px", minWidth: "100vw", maxWidth: "100vw", backgroundColor: "#eae9f1"}}></div>

              <div className='xxs:py-2 px-4 py-4 w-3/4' onClick={() => setOpenPrice(!openCalender)}>
                <div className='price-filter flex relative justify-between items-center'>
                  <p>{minPrice ? `${'$'+minPrice+'-'+'$'+maxPrice}` : "Price"}</p>
                  <div className='p-1 rounded-full' style={{backgroundColor: "#f2f2f2"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
                </div>
                <OutsideClickHandler onOutsideClick={() => setOpenPrice(false)}>
                  <div className='flex items-center gap-2 border-gray-1 py-20 px-8 top-6' style={{display: openPrice ? "flex" : "none"}}>
                    <input className='price-input w-24 p-2 rounded-sm' type="number" placeholder='min' onChange={(ele) => setMinPrice(ele.target.value)} />
                    <div>-</div>
                    <input className='price-input w-24 p-2 rounded-sm' type="number" placeholder='max' onChange={(ele) => setMaxPrice(ele.target.value)} />
                  </div>
                </OutsideClickHandler>
              </div>

              <div className='mx-6 my-2 xxs:my-1' style={{minHeight: "2px", maxHeight: "2px", minWidth: "100vw", maxWidth: "100vw", backgroundColor: "#eae9f1"}}></div>

              <div className='type-filter w-3/4 py-4 xxs:py-2 ' >
                <select className='w-full px-4 py-2 rounded-lg bg-white border-2 border-gray-300' onChange={(e) => setType(e.target.value)}>
                  <option value="">{type ? type : "Type"}</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>

              <div className='mx-6 my-2 xxs:my-1' style={{minHeight: "2px", maxHeight: "2px", minWidth: "100vw", maxWidth: "100vw", backgroundColor: "#eae9f1"}}></div>

              <div className='w-3/4 flex justify-center items-center'>
                <button type='submit' className='btn w-2/4 xl:w-3/5 lg:w-4/5 text-lg font-semibold py-2 px-2 rounded-md' style={{backgroundColor: "#7066ef", color: "#FFF"}}>Search</button>
              </div>
            </form>
          </div>
        </div>




        <div className='card_container py-14 grid mx-auto
        grid-cols-4
        2xl:grid-cols-3
        xl:grid-cols-2
        md:grid-cols-1
        gap-10
        xl:gap-16
        md:w-3/5
        sm:w-10/12
        xs:w-full
        '
        >
          {
            realEstate.map((item, index) => {
              return <Card key={index} item={item} />
            }
            )
          }
        </div>
    </div>
  )
}

export default Body