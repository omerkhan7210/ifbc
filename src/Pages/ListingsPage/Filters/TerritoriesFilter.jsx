import { useContext } from "react"
import { MyContext } from "src/Context/ListingDataContext"

const TerritoriesFilter = () => {
  const { listings, filters, setFilters } = useContext(MyContext)
  // Function to handle changes in the search input field
  const handleSelectChange = (event) => {
    const cat = event.target.value;

    // Update the filters state with the search keyword
    setFilters({
      ...filters,
      category: cat
    });
  };
  const uniqueFranchisedUnits = [...new Set(listings.map(listing => listing.category))];

  return (
    <div className="flex flex-col gap-4 mt-4">
      
    <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Territories</option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>
      
  </div>
  )
}

export default TerritoriesFilter
