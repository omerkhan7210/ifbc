import { useContext, useState } from "react"
import { MyContext } from "src/Context/ListingDataContext"

const BusinessFilter = () => {

  const {listings , loading,filters,setFilters} = useContext(MyContext)
  // Function to handle changes in the search input field
  const handleSelectChange = (event) => {
   
   const value = event.target.value;
   // Update the filters state with the search keyword
   setFilters({
     ...filters,
     [event.target.name] : value
   });
 };

 const uniqueFranchisedUnits = [...new Set(listings.map(listing => listing.franchisedUnits))];
 const uniqueTypes = [...new Set(listings.map(listing => listing.TypeofBusiness))];
 const uniqueMemberships = [...new Set(listings.map(listing => listing.Memberships))];
 const uniquePassiveOwnership = [...new Set(listings.map(listing => listing.PassiveOwnership))];

  return (
    <div className="flex flex-col gap-4 mb-4">
        <select name="units" id="units" className="w-full text-custom-heading-color" value={filters ? filters?.units : ''} onChange={handleSelectChange}>
                  {!filters?.units &&
                    <option value="">Number of Units</option>
                  }
                  {uniqueFranchisedUnits.map((franchisedUnits,index)=>{
                    if(franchisedUnits && franchisedUnits !== ''){
                      const franchisedUnitsNew = franchisedUnits.split(':')[1].trim(); // Extract numbers and remove leading/trailing spaces
                      return <option key={index} value={franchisedUnits}>{franchisedUnitsNew}</option>;
                    }
                  })}
                </select>
   
        <select name="units" id="units" className="w-full text-custom-heading-color" value={filters ? filters?.units : ''} onChange={handleSelectChange}>
                  {!filters?.units &&
                    <option value="">Concept Status</option>
                  }
                  {uniqueFranchisedUnits.map((franchisedUnits,index)=>{
                    if(franchisedUnits && franchisedUnits !== ''){
                      const franchisedUnitsNew = franchisedUnits.split(':')[1].trim(); // Extract numbers and remove leading/trailing spaces
                      return <option key={index} value={franchisedUnits}>{franchisedUnitsNew}</option>;
                    }
                  })}
                </select>
     
      </div>
  )
}

export default BusinessFilter
