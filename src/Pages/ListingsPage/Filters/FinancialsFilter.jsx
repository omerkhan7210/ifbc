import { useContext } from "react"
import { MyContext } from "src/Context/ListingDataContext"

const FinancialsFilter = () => {

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
    <div>
    <div className="flex flex-col gap-4">
        <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Max Investment </option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>
       
        <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Liquid Capital</option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>

        <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Net Worth </option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>
      
        <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Discount</option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>
      
      {/* <div className="mb-4 flex items-center"><input type="checkbox" id="item-19" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="item-19">Item 19</label></div>
      <div className="mb-8 flex items-center"><input type="checkbox" id="bonus" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="bonus">Has Bonus</label></div> */}
    </div>
  </div>
  )
}

export default FinancialsFilter
