import { useContext, useState } from "react";
import BusinessFilter from "./Filters/BusinessFilter"
import FinancialsFilter from "./Filters/FinancialsFilter"
import TerritoriesFilter from "./Filters/TerritoriesFilter"
import { MyContext } from "src/Context/ListingDataContext";
import CategorySearch from "./Filters/CategorySearch";




const ListingsFilter = () => {

  const { filters, setFilters,setSelectedCats } = useContext(MyContext)

  return (
    <div id="main-filter-container" className="sticky top-0">
      
      {filters &&
        <button
          onClick={() => { 
            setSelectedCats([])
            setFilters(null) 
          }}
          className="mb-4 font-bold cursor-pointer hover:bg-red-800 hover:text-white transition flex items-center gap-1 border-2 border-red-800 px-2 justify-between w-full not-prose uppercase text-red-950 ">
          Clear Filters <span className="text-red ">X</span>
        </button>
      }

      <CategorySearch homepage={false} />
      <BusinessFilter />
      <FinancialsFilter />
      <TerritoriesFilter />
      {/* <FeaturesFilter />
      <ListsFilter /> */}

    </div>
  )
}

export default ListingsFilter
