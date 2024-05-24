import React, { useContext, useEffect, useState } from 'react'
import TopBar from './TopBar'
import { useParams } from 'react-router-dom'
import BottomBar from './BottomBar'
import { MyContext } from 'src/Context/ListingDataContext'
import BarLoader from 'src/Animations/BarLoader'

const MainDetails = () => {
    const url = useParams()
    const pName = url.name
    const {listings,loading} = useContext(MyContext)
    const [listingContent,setListingContent] = useState()

    useEffect(()=>{
        listings.map((listing)=>{
            const url = listing.name.toLowerCase().split(' ').join("-")
            if(url === pName){
                setListingContent(listing)
            }
        })
    },[listings])
  return (

    loading ? 
    <BarLoader/>
    :
    ( 
        <main id="main" role="main" tabIndex={-1} className="max-w-7xl px-6 mx-auto gap-x-10">
            <TopBar listingContent={listingContent}/>
            <BottomBar listingContent={listingContent}/>
        </main>
        )



  )
}

export default MainDetails
