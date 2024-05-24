import React, { useContext, useState } from 'react'
import { MyContext } from 'src/Context/ListingDataContext'
import ListingsColumns from 'src/Pages/ListingsPage/ListingsColumns'

const TerritoryCheck = () => {
    const {activeListings,tCheck,setTCheck,listings} = useContext(MyContext)
    const [active,setActive] = useState('candidate')

  return (
    <div className={`modal modal-container ${tCheck ? "is-open" : ""}`} id="territory-check" aria-hidden="false">
  <div className="modal__overlay" tabIndex={-1}>
    <div className="modal__container tc-width md:w-[56rem]" role="dialog" aria-modal="true" aria-labelledby="territory-check-title">
      <header className="modal__header">
        <h2 className="modal__title text-green text-2xl font-bold" id="territory-check-title"> Territory Check </h2>
        <button className="modal__close" aria-label="Close modal" onClick={()=>{setTCheck(false)}} />
      </header>
      <main className="modal__content" id="territory-check-content">
              <div className="mb-12">
                <ul className="tabs border-b border-gold/50 flex flex-wrap mb-4 not-prose mt-0 ml-0 p-0">
                  <li
                  onClick={()=>setActive('candidate')} 
                  className={`py-4 px-6 font-bold cursor-pointer hover:border-b-custom-heading-color hover:border-b-4 transition not-prose uppercase font-sans text-green  ${active === 'candidate' ? "border-b-4 border-b-custom-heading-color"  : ""}`} id="candidate-info">
                    Candidate Info 
                  </li>
                  {activeListings?.length > 0 && 
                  <li 
                  onClick={()=>setActive('franchises')}
                  className={`py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-custom-heading-color ${active === 'franchises' ? "border-b-4 border-b-custom-heading-color"  : ""}`} id="selected-franchises">Selected Franchises <span className="tab-count">({activeListings.length})</span></li>
                }
                </ul>
                {active === 'candidate' ?
               
                  <form method="post" encType="multipart/form-data" action>
                    
                    <h3 className="text-lg mb-2 mt-0 font-bold"> Candidates Name* </h3>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className>
                        <label className htmlFor="tc-first-name">First Name</label>
                       <input type="text" name='fname' className='border-1 border-custom-blue' />
                      </div>
                      <div className><label className htmlFor="tc-last-name">Last Name<span className>*</span></label><input type="text" name="tc-last-name" id="tc-last-name" autoComplete="off" /></div>
                    </div>
                    <h3 className="text-lg mb-2 mt-0 font-bold">Territory*</h3>
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className><label className htmlFor="tc-city">City</label><input type="text" name="tc-city" id="tc-city" autoComplete="off" /></div>
                      <div className>
                        <label className htmlFor="tc-state">State / Province / Region </label>
                        <select name="_fba_state" id="_fba_state">
                          <option value>Select One</option>
                          <option value=" ">None</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                          <option value="INT">International</option>
                          <option value="AB">Alberta</option>
                          <option value="BC">British Columbia</option>
                          <option value="MB">Manitoba</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="NT">Northwest Territories</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="NU">Nunavut</option>
                          <option value="ON">Ontario</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="QC">Quebec</option>
                          <option value="SK">Saskatchewan</option>
                          <option value="YT">Yukon Territory</option>
                        </select>
                      </div>
                      <div className><label className htmlFor="tc-zip">ZIP / Postal Code </label><input type="text" name="tc-zip" id="tc-zip" autoComplete="off" /></div>
                    </div>
                    <div className="mb-8"><label htmlFor="tc-about">Territory Note / Email Contents</label><textarea name="tc-about" id="tc-about" rows={4} defaultValue={""} /></div>
                    <div className="additional-territories">
                      
                    </div>
                    <div className="mb-8">
                      <button type="button" className="button tertiary-button"> Add Additional Territory </button></div>
                    <div className="mb-8"><input type="checkbox" id="contact-info" /><label htmlFor="contact-info">Include candidate name in Territory Request</label></div>
                    
                    <div className="flex items-center justify-center">
                      <button type="submit" className="button mr-4"> Submit </button>
                    </div>
                   
                  </form>
                :
                activeListings?.length > 0 && 
                <div >
                  <div className="grid md:grid-cols-3 gap-4">
                    {listings
                    .filter(listing => activeListings.includes(listing.name))
                    .map((listing,index)=>(
                      <ListingsColumns key={index} index={index} listing={listing}/>
                    ))}
                  </div>
                </div>
                }
              </div>
      </main>
    </div>
  </div>
</div>

  )
}

export default TerritoryCheck
