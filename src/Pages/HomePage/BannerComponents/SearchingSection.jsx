import React from 'react'
import CategorySearch from 'src/Pages/ListingsPage/Filters/CategorySearch'
import SearchingComponent from 'src/Pages/ListingsPage/SearchingComponent'

const SearchingSection = () => {
    return (
        <div className="md:col-span-6 col-span-12 order-1 mb-10 md:mb-0 md:order-2 relative" >
            <div className=' h-[400px] p-5 w-full rounded-lg' >
                <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    {/* searching */}
                    <SearchingComponent homepage={true} />
                    {/* dd */}
                    <CategorySearch homepage={true} />

                </div>
            </div>        
            <div className="w-full  h-full absolute right-0 bottom-0 -z-10 bg-it-blue">
                <img src="/images/home-seven/dot.svg" alt className='rounded-lg w-full' />
            </div>
        </div>

    )
}

export default SearchingSection
