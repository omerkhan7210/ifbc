import React, { useContext, useState } from 'react'
import { MyContext } from 'src/Context/ListingDataContext';

const SearchDropdown = ({ config }) => {
    const { key, placeholder, buttonBgColor } = config;
    const [activeDD, setActiveDD] = useState(false);
    const [selectedCat, setSelectedCat] = useState('');
    const { listings } = useContext(MyContext);

    const uniqueItems = [...new Set(listings.map((listing) => listing[key]))];

    return (
        <div className="relative w-full group flex flex-col gap-2 col-span-12 md:col-span-3">
            <button
                className={`h-16 px-4 text-md w-full capitalize text-white bg-custom-dark-blue focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between font-semibold ${selectedCat ? 'text-xs' : ''}`}
                onClick={() => setActiveDD(!activeDD)}
            >
                {selectedCat && selectedCat !== '' ? (
                    <>
                        {selectedCat}
                        <svg 
                        onClick={() => {
                            setActiveDD(false)
                            setSelectedCat('')
                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </>
                ) : (
                    <>
                        {placeholder}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25l7.5 7.5 7.5-7.5m-15 6l7.5 7.5 7.5-7.5" />
                        </svg>
                    </>
                )}
            </button>
            <div className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] shadow-lg w-full ${activeDD ? 'h-[300px]' : 'h-0 opacity-0'} duration-200 bg-white border border-dimmed text-sm md:text-sm overflow-x-hidden overflow-scroll ]`}>
                {uniqueItems.map((item, index) => (
                    <div className="flex justify-between items-center" key={index}>
                        <div
                        onClick={() => {
                            setActiveDD(false)
                            setSelectedCat(item)
                        }}
                            className="text-black w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 hover:text-link px-3 py-2"
                        >
                            <span>
                                {item} 
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SearchingSection = () => {
    
    const searchConfigs = [
        
        {
            key: 'category',
            placeholder: 'Select Category',
            buttonBgColor: '#4d85ff',
        },
        {
            key: 'FranchiseFee',
            placeholder: 'Select Investment Fee',
            buttonBgColor: '#1a62ff',
        },
        {
            key: 'franchisedUnits',
            placeholder: 'Select Units',
            buttonBgColor: '#0048e6',
        },
        {
            key: 'Single',
            placeholder: 'Select Single',
            buttonBgColor: '#0038b3',
        },
    ];

    const { filters, setFilters } = useContext(MyContext)
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearchInputChange = (event) => {
        const keyword = event.target.value;
        setSearchKeyword(keyword);
        setFilters({
            ...filters,
            search: keyword
        });
    };

    const isMobile = window.innerWidth < 768 ? true : false

    return (
            
        <div id='searching-contianer' className='flex flex-col gap-2'>
            <div className="relative col-span-12 md:col-span-12  flex items-center">
                <input 
                    type="search" 
                    id="search-field" 
                    placeholder="Search Any Listing"
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                    className="block w-full px-2 py-3 text-sm    text-black pr-10 rounded-none outline-none bg-white" />

                <button className=" absolute right-2.5 top-5.5 w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 487.95 487.95">
                        <path d="m481.8 453-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z">
                        </path>
                    </svg>
                </button>
            </div>
            <div className='grid grid-cols-12 gap-2'>
                {searchConfigs.map((config, index) => (
                    <SearchDropdown key={index} config={config} />
                ))}
            </div>
           
           <button className={`uppercase text-md bg-white font-semibold ${isMobile ? "w-full":"md:w-1/2"}  mx-auto py-3 md:px-60`}>SEARCH</button>
          
        </div>


    )
}

export default SearchingSection
