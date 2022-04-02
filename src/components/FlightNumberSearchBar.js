import React from 'react'
import "./Filters.css"

export default function FlightNumberSearchBar({flightNumberFilter,setFlightNumberFilter,setCountryFilter}) {


  return (


    <div className='flex-filter'>
      <ul>Choose your flight :</ul>
        <input name="flightNumber" value={flightNumberFilter} className='filter filter-number'  onChange={(e)=>{setCountryFilter("");setFlightNumberFilter(e.target.value)}} 
        type="text" placeholder="Enter your flight number"></input>
        
    </div>
  )
}
