import { useContext, useEffect, useState } from "react"
import AllListings from "./AllListings"
import ListingsFilter from "./Filters/ListingsFilter"
import { MyContext } from "src/Context/ListingDataContext"
import SearchingComponent from "./SearchingComponent"
import { useParams } from "react-router-dom"


const ExtraTools = ()=>{
 

    const { handleTools, activeListings, setActiveListings ,setTCheck,setformalRegCheck, showActiveListings,setShowActiveListings,paginationListings} = useContext(MyContext)
  
    const selectAllListings = () => {
      // Get an array of all listing names currently displayed on the page
      const allListingNames = paginationListings?.map(listing => listing.name);
      // Update the activeListings state to include all listing names
      setActiveListings(allListingNames);
    };
  
    return(
      <div className="grid grid-cols-12 gap-3 items-center">
  
    
      <div id="form-button-container" className="flex flex-col gap-2 w-full justify-between h-full sm:col-span-6 col-span-12 lg:col-span-4">
          <button className="bg-custom-dark-blue py-3 text-white secondary-button  w-full" value="tc" onClick={()=>setTCheck(true)}> Territory Checks
          </button>
          <button className="bg-custom-dark-blue py-3 text-white w-full " value="fr"  onClick={()=>setformalRegCheck(true)}> Formal Registrations </button>
      </div>
  
      <div className="grid grid-cols-12 col-span-12 sm:col-span-6 lg:col-span-4 w-full gap-3 sm:gap-3 ">
        <div className="col-span-12">
        <select onChange={handleTools}>
            <option value>Tools</option>
            <option value="email"> Email Selected Franchises </option>
            <option value="info"> Create Information Packet </option>
            <option value="comparison"> Create Comparison Report </option>
            <option value="2-min"> Download 2-Min Drill Packet </option>
            <option value="one-sheet"> Download One Sheet Packets </option>
        </select>
        </div>

        <button className="col-span-6 border-2 border-green-600 py-2 px-5 w-full md:w-auto tertiary-button text-green-600" onClick={selectAllListings}> Select All </button>

        <button className="col-span-6 border-2 border-red-600 py-2 px-5  w-full md:w-auto tertiary-button text-red-600"
          onClick={() => {
            setShowActiveListings(false)
            setActiveListings([])
          }}> Clear All </button>
      </div>

      <div className={`col-span-12 lg:col-span-4 md:flex md:mb-4 mb-0 flex-col h-full ${activeListings && activeListings.length > 0 ? "justify-between ":"justify-start"} `}>
        
      <SearchingComponent  homepage={false}/>
  
        {activeListings && activeListings.length > 0 &&
          <button type="button"
            onClick={() => setShowActiveListings(!showActiveListings)}
            className={`border-2 border-custom-blue py-2 px-5 w-full whitespace-nowrap mr-4 ${showActiveListings ? "text-white bg-custom-blue" : "text-custom-blue"}`}> My Selection <span> ({activeListings.length}) </span></button>
        }
      </div>
    </div>
    )
}
  

const MainListings = () => {

    return (

        <main  className="lg:max-w-7xl xl:max-w-screen-2xl	 pt-10 px-6 mx-auto grid grid-cols-12 gap-6 relative" 
        id="main">
            

            <div className="col-span-12">
            <ExtraTools/>
            </div>

            <div id="left-sidebar" className="md:col-span-3  sm:col-span-6 col-span-12 mt-5 bg-white">
            <ListingsFilter />
            </div>

            <div id="right-sidebar"  className="md:col-span-9 sm:col-span-6 col-span-12 ">
            <AllListings/>
            </div>
            
            
        </main>
    )
}

export default MainListings
