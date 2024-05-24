import React, { useContext } from 'react'
import { MyContext } from 'src/Context/ListingDataContext'

const FLSEmail = () => {
    const {showEmailPopup,setShowEmailPopup,activeListings} = useContext(MyContext)
    return (
        <div className={`modal modal-container ${showEmailPopup ? "is-open" : ""}`} id="fls-email" >
            <div className="modal__overlay"  >
                <div className="modal__container tc-width md:w-[46rem]" role="dialog"  >
                    <header className="modal__header">
                        <h2 className="modal__title text-green text-xl" id="fls-email-title"> Email Concepts </h2>
                        <button className="modal__close"  onClick={()=>setShowEmailPopup(false)} />
                    </header>
                    <main className="modal__content" id="fls-email-content">
                      
                                <form method="post">
                                    <div className="grid md:grid-cols-1 gap-8 mb-8">
                                        <div>
                                            <label className htmlFor="subject"> Subject<span className>*</span></label>
                                            <input type="text" name="subject" id="subject" autoComplete="off" />
                                        </div>
                                        <div >
                                            <label className htmlFor="message"> Message <span className>*</span></label>
                                            <textarea name="message" rows={6} id="message" autoComplete="off" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-8">
                                        <button className="button mr-4">Submit</button>{/**/}
                                    </div>
                                    {activeListings && activeListings.length>0 && 
                                        <div className="territory-zor-list">
                                            <p className="mb-2"><strong className="section-description"> List of concepts to sent territory check to: </strong></p>
                                            <div className="selected-territory-zor-list">
                                                <ul className="mb-4 list-none p-0 mt-0 text-sm">
                                                {activeListings.map((listings)=>{
                                                    <li class="bg-gray-200 text-sm border-b border-white p-2">{listings}</li>
                                                })}
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                </form>
                           
                    </main>
                </div>
            </div>
        </div>

    )
}

export default FLSEmail
