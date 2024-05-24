
const FeaturesFilter = () => {
  
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
    <div  >
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        {/* <div className="text-sm font-bold mb-2 text-medium-gold"> Development Group </div> */}
        
        <select name="categorys" id="categorys" className=" text-custom-heading-color" value={filters ? filters?.category : ''} onChange={handleSelectChange}>
          {!filters?.category &&
            <option value="">Development Group</option>
          }
          {uniqueFranchisedUnits.map((listing, index) => (

            <option key={index} value={listing.category}>{listing.category}</option>

          ))}
        </select>
      </div>
      <div />
      <div />
      <div />
      <div className="mb-4 flex items-center"><input type="checkbox" id="standardHours" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="standardHours">Standard
          Hours</label></div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="residualIncome" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="residualIncome">Residual
          Income</label></div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="staff" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="staff">No Staff Required</label>
      </div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="national" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="national">National
          Accounts</label></div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="call-center" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="call-center">Call Center</label>
      </div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="site-selection" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="site-selection">Site
          Selection</label></div>
      <div className="mb-4 flex items-center"><input type="checkbox" id="lease-negotiation" defaultValue={1} /><label className="text-sm mb-2 text-medium-gold  ml-2 " htmlFor="lease-negotiation">Lease
          Negotiation</label></div>
    </div>
  </div>
  )
}

export default FeaturesFilter
