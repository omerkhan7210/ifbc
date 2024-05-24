import React, { useContext, useState } from 'react'
import { MyContext } from 'src/Context/ListingDataContext'
import ListingsColumns from 'src/Pages/ListingsPage/ListingsColumns'


const FormalReg = () => {

  const {activeListings,formalRegCheck,setformalRegCheck,listings} = useContext(MyContext)
  const [active,setActive] = useState('candidate')


  return (
    <div className={`modal modal-container ${formalRegCheck ? "is-open" : ""}`} id="formal-registration" aria-hidden="false">
  <div className="modal__overlay" tabIndex={-1}>
    <div className="modal__container tc-width md:w-[56rem]" role="dialog" aria-modal="true" aria-labelledby="formal-registration-title">
      <header className="modal__header">
        <h2 className="modal__title text-green text-2xl font-bold" id="formal-registration-title"> Formal Registration </h2>
        <button className="modal__close" aria-label="Close modal" onClick={()=>setformalRegCheck(false)} />
      </header>
      <main className="modal__content" id="formal-registration-content">
        
              <div data-v-76187add className="mb-12">
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
               
                <form method="post" encType="multipart/form-data">
                      <div id="required-fields">
                        
                      </div>
                      <p className="text-sm text-medium-gold italic mb-8 font-serif"> Fields with a green outline are included in Territory Checks submissions </p>
                      <div className="md:grid md:grid-cols-2 gap-8">
                        <div className="mb-8">
                          <label className="mb-2 block" htmlFor="_fba_first_name">Primary Candidate First Name<span className>*</span></label>
                          <div dir="auto" className="v-select vs--single vs--searchable">
                            <div id="vs18__combobox" className="vs__dropdown-toggle" role="combobox" aria-expanded="false" aria-owns="vs18__listbox" aria-label="Search for option">
                              <div className="vs__selected-options"><input className="vs__search" aria-autocomplete="list" aria-labelledby="vs18__combobox" aria-controls="vs18__listbox" type="search" autoComplete="off" /></div>
                              <div className="vs__actions">
                                <button type="button" className="vs__clear" title="Clear Selected" aria-label="Clear Selected" style={{display: 'none'}}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10}>
                                    <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                                  </svg>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} role="presentation" className="vs__open-indicator">
                                  <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                                </svg>
                                <div className="vs__spinner" style={{display: 'none'}}>Loading...</div>
                              </div>
                            </div>
                            <ul id="vs18__listbox" role="listbox" className style={{display: 'none', visibility: 'hidden'}} />
                          </div>
                          
                        </div>
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_last_name">Primary Candidate Last Name<span className>*</span></label><input type="text" id="_fba_last_name" className="tc-required" /></div>
                      </div>
                      <div className="md:grid md:grid-cols-2 gap-8">
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_phone">Primary Candidate Phone Number<span className>*</span></label><input type="text" id="_fba_phone" className="tc-required" /></div>
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_email">Primary Candidate Email<span className>*</span></label><input type="email" id="_fba_email" className="tc-required" /></div>
                      </div>
                      
                      <h3 className="text-xl mb-8">Requested Territory</h3>
                      
                      <div className="md:grid md:grid-cols-3 gap-8">
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_city">City<span className>*</span></label><input type="text" name="_fba_city" id="_fba_city" className="tc-required" /></div>
                        <div className="mb-8">
                          <label className="mb-2 block" htmlFor="_fba_state">State / Province<span className>*</span></label>
                          <select name="_fba_state" id="_fba_state" className="tc-required">
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
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_zip">Zip / Postal Code<span className>*</span></label><input type="text" name="_fba_zip" id="_fba_zip" className="tc-required" /></div>
                      </div>
                      
                      <h3 className="text-xl mb-2">Current Address</h3>
                      <p className="mb-8 flex items-center"><input type="checkbox" id="same" /><label htmlFor="same">Same as territory requested.</label></p>
                      <div className="md:grid md:grid-cols-3 gap-8">
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_city_current">City</label><input type="text" name="_fba_city_current" id="_fba_city_current" /></div>
                        <div className="mb-8">
                          <label className="mb-2 block" htmlFor="_fba_state_current">State / Province </label>
                          <select name="_fba_state_current" id="_fba_state_current">
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
                        <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_zip_current">Zip / Postal Code</label><input type="text" name="_fba_zip_current" id="_fba_zip_current" /></div>
                      </div>
                      
                      <div data-v-76187add className="mb-12">
                        <ul data-v-76187add className="tabs border-b border-gold/50 flex flex-wrap mb-4 not-prose mt-0 ml-0 p-0">
                          <li data-v-76187add className="py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-green border-b-green border-b-4" id="initial-qualifying">
                            Initial Qualifying 
                          </li>
                          <li data-v-76187add className="py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-green" id="zorakle-spoton">
                            Zorakle SpotOn! 
                          </li>
                          <li data-v-76187add className="py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-green" id="eligibility">
                            Eligibility 
                          </li>
                          <li data-v-76187add className="py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-green" id="experience">
                            Experience 
                          </li>
                          <li data-v-76187add className="py-4 px-6 font-bold cursor-pointer hover:border-b-green hover:border-b-4 transition not-prose uppercase font-sans text-green" id="wants">
                            Wants 
                          </li>
                          
                        </ul>
                        <div >
                          
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_invest">How much money are you wanting to invest in the franchise?</label>
                            <select name="_fba_invest" id="_fba_invest">
                              <option value>Select one</option>
                              <option value="$5,000 - $49,999"> $5,000 - $49,999 </option>
                              <option value="$50,000 - $99,999"> $50,000 - $99,999 </option>
                              <option value="$100,000 - $199,999"> $100,000 - $199,999 </option>
                              <option value="$200,000 - $499,999"> $200,000 - $499,999 </option>
                              <option value="$500,000 - $749,999"> $500,000 - $749,999 </option>
                              <option value="More than $750,000"> More than $750,000 </option>
                            </select>
                            <p className="text-sm italic mt-2 text-medium-gold"> Used as Maximum Investment </p>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_need_funding">Do you have a need for funding?</label>
                            <select name="_fba_need_funding" id="_fba_need_funding">
                              <option value="Required to move forward"> Required to move forward </option>
                              <option value="Looking for options"> Looking for options </option>
                              <option value="Seeking funding independently"> Seeking funding independently </option>
                              <option value="No funding required"> No funding required </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_credit_score">What is your approximate credit score?</label>
                            <select name="_fba_credit_score" id="_fba_credit_score">
                              <option value>Select one</option>
                              <option value="Excellent - 780 to 850"> Excellent - 780 to 850 </option>
                              <option value="Very good - 740 to 779"> Very good - 740 to 779 </option>
                              <option value="Above average - 720 to 739"> Above average - 720 to 739 </option>
                              <option value="Average - 680 to 719"> Average - 680 to 719 </option>
                              <option value="Below average - 620 to 679"> Below average - 620 to 679 </option>
                              <option value="Poor - 580 to 619"> Poor - 580 to 619 </option>
                              <option value="Very poor - Under 580"> Very poor - Under 580 </option>
                              <option value="I do not know">I do not know</option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_fba_networth">Net Worth? </label>
                            <select name="_fba_fba_networth" id="_fba_fba_networth">
                              <option value>Select one</option>
                              <option value="$0 or Negative"> $0 or Negative </option>
                              <option value="$100,000 or less"> $100,000 or less </option>
                              <option value="$100,001 to $250,000"> $100,001 to $250,000 </option>
                              <option value="$250,001 to $500,000"> $250,001 to $500,000 </option>
                              <option value="$500,001 to $750,000"> $500,001 to $750,000 </option>
                              <option value="$750,001 to $1,000,000"> $750,001 to $1,000,000 </option>
                              <option value="$1,000,001 to $2,000,000"> $1,000,001 to $2,000,000 </option>
                              <option value="$2,000,001 to $5,000,000"> $2,000,001 to $5,000,000 </option>
                              <option value="$5,000,001 to $10,000,000"> $5,000,001 to $10,000,000 </option>
                              <option value="$10,000,001 or more"> $10,000,001 or more </option>
                              <option value="I prefer not to answer"> I prefer not to answer </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_liquid_cash">Liquid Cash? </label>
                            <select name="_fba_liquid_cash" id="_fba_liquid_cash">
                              <option value>Select one</option>
                              <option value="$0">$0</option>
                              <option value="$10,000 or under"> $10,000 or under </option>
                              <option value="$10,001 to $30,000"> $10,001 to $30,000 </option>
                              <option value="$30,001 to $50,000"> $30,001 to $50,000 </option>
                              <option value="$50,001 to $75,000"> $50,001 to $75,000 </option>
                              <option value="$75,001 to $100,000"> $75,001 to $100,000 </option>
                              <option value="$100,001 to $125,000"> $100,001 to $125,000 </option>
                              <option value="$125,001 to $150,000"> $125,001 to $150,000 </option>
                              <option value="$150,001 to $200,000"> $150,001 to $200,000 </option>
                              <option value="$200,001 to $300,000"> $200,001 to $300,000 </option>
                              <option value="$300,001 to $500,000"> $300,001 to $500,000 </option>
                              <option value="$500,001 to $1,000,000"> $500,001 to $1,000,000 </option>
                              <option value="$1,000,001 to $2,500,000"> $1,000,001 to $2,500,000 </option>
                              <option value="$2,500,001 or more"> $2,500,001 or more </option>
                              <option value="I prefer not to answer"> I prefer not to answer </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_caused">What caused you to start looking for a franchise? </label>
                            <select name="_fba_caused" id="_fba_caused">
                              <option value>Select one</option>
                              <option value="I want to own my own business"> I want to own my own business </option>
                              <option value="I want to transition out of my job"> I want to transition out of my job </option>
                              <option value="I need more flexibility in my life"> I need more flexibility in my life </option>
                              <option value="I am looking for a side hustle while I'm still employed"> I am looking for a side hustle while I'm still employed </option>
                              <option value="I'm seeking another investment to add to my portfolio"> I'm seeking another investment to add to my portfolio </option>
                              <option value="I want to find a business for a family member"> I want to find a business for a family member </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_professional_background">What is your professional background? </label>
                            <select name="_fba_professional_background" id="_fba_professional_background">
                              <option value>Select one</option>
                              <option value="No Preference">No Preference</option>
                              <option value="Sales">Sales</option>
                              <option value="Executive">Executive</option>
                              <option value="Manager">Manager</option>
                              <option value="IT">IT</option>
                              <option value="Admin">Admin</option>
                              <option value="Finance">Finance</option>
                              <option value="HR">HR</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Operations">Operations</option>
                              <option value="Trades">Trades</option>
                              <option value="Laborer">Laborer</option>
                              <option value="Logistics">Logistics</option>
                            </select>
                          </div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_fran_interest">What franchises are you interested in? </label><input type="text" name="_fba_fran_interest" id="_fba_fran_interest" /></div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_time_frame">What is your time frame? </label>
                            <select name="_fba_time_frame" id="_fba_time_frame">
                              <option value>Select one</option>
                              <option value="As soon as possible"> As soon as possible </option>
                              <option value="1 to 3 months">1 to 3 months</option>
                              <option value="4 to 6 months">4 to 6 months</option>
                              <option value="6 to 12 months"> 6 to 12 months </option>
                              <option value="7 to 9 months">7 to 9 months</option>
                              <option value="10 to 12 months"> 10 to 12 months </option>
                              <option value="More than a year away"> More than a year away </option>
                              <option value="Unsure at the moment"> Unsure at the moment </option>
                            </select>
                          </div>
                          
                        </div>
                        <div  style={{display: 'none'}}>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_first_competency">Competency 1? </label>
                            <select className="cmb_select" id="_fba_first_competency">
                              <option value> Select one </option>
                              <option value="Leadership-Vision"> Leadership &amp; Vision </option>
                              <option value="Sales-Channel-Planning"> Sales &amp; Channel Planning </option>
                              <option value="Marketing-Public-Relations"> Marketing &amp; Public Relations </option>
                              <option value="Executive-Management"> Executive &amp; Management </option>
                              <option value="Human-Resources-Training"> Human Resources &amp; Training </option>
                              <option value="Admin-Customer-Service"> Admin &amp; Customer Service </option>
                              <option value="Finance-Operations"> Finance &amp; Operations </option>
                              <option value="R-D-Technical"> R&amp;D &amp; Technical </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_second_competency">Competency 2? </label>
                            <select className="cmb_select" id="_fba_second_competency">
                              <option value> Select one </option>
                              <option value="Leadership-Vision"> Leadership &amp; Vision </option>
                              <option value="Sales-Channel-Planning"> Sales &amp; Channel Planning </option>
                              <option value="Marketing-Public-Relations"> Marketing &amp; Public Relations </option>
                              <option value="Executive-Management"> Executive &amp; Management </option>
                              <option value="Human-Resources-Training"> Human Resources &amp; Training </option>
                              <option value="Admin-Customer-Service"> Admin &amp; Customer Service </option>
                              <option value="Finance-Operations"> Finance &amp; Operations </option>
                              <option value="R-D-Technical"> R&amp;D &amp; Technical </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_third_competency">Competency 3? </label>
                            <select className="cmb_select" id="_fba_third_competency">
                              <option value> Select one </option>
                              <option value="Leadership-Vision"> Leadership &amp; Vision </option>
                              <option value="Sales-Channel-Planning"> Sales &amp; Channel Planning </option>
                              <option value="Marketing-Public-Relations"> Marketing &amp; Public Relations </option>
                              <option value="Executive-Management"> Executive &amp; Management </option>
                              <option value="Human-Resources-Training"> Human Resources &amp; Training </option>
                              <option value="Admin-Customer-Service"> Admin &amp; Customer Service </option>
                              <option value="Finance-Operations"> Finance &amp; Operations </option>
                              <option value="R-D-Technical"> R&amp;D &amp; Technical </option>
                            </select>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_growth">Stage of Growth </label>
                            <div dir="auto" className="v-select vs--multiple vs--searchable">
                              <div id="vs19__combobox" className="vs__dropdown-toggle" role="combobox" aria-expanded="false" aria-owns="vs19__listbox" aria-label="Search for option">
                                <div className="vs__selected-options"><input className="vs__search" placeholder="Select Stage" aria-autocomplete="list" aria-labelledby="vs19__combobox" aria-controls="vs19__listbox" type="search" autoComplete="off" /></div>
                                <div className="vs__actions">
                                  <button type="button" className="vs__clear" title="Clear Selected" aria-label="Clear Selected" style={{display: 'none'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10}>
                                      <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                                    </svg>
                                  </button>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} role="presentation" className="vs__open-indicator">
                                    <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" />
                                  </svg>
                                  <div className="vs__spinner" style={{display: 'none'}}>Loading...</div>
                                </div>
                              </div>
                              <ul id="vs19__listbox" role="listbox" style={{display: 'none', visibility: 'hidden'}} />
                            </div>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_value">Value </label>
                            <select className="cmb_select" name="_fba_value" id="_fba_value">
                              <option value> Select one </option>
                              <option value="Emulator">Emulator</option>
                              <option value="Belonger">Belonger</option>
                              <option value="Achiever">Achiever</option>
                              <option value="Societal">Societal</option>
                            </select>
                            <p className="mt-4 text-sm italic text-medium-gold"><strong>Emulator</strong> - Motivated by an insatiable desire for success, they are driven to do whatever it takes to conquer a challenge. Recognition and money defines success for Emulators. They prefer prestigious, progressive concepts that offer heroic, innovative solutions for their clients. They are independent thinkers and require a high degree of flexibility. <br /><strong>Belonger </strong> - Hands-on business builder focused on long-term relationships and customer satisfaction. Motivated by a deeply rooted moral code they are hardworking and committed to providing for and protecting their loved ones. Family and security defines success for the Belonger. They favor proven, practical service or solution-based businesses. <br /><strong>Achiever </strong> - A tenacious business builder, never satisfied until they dominate the market. Motivated by accomplishment, they have a goal-oriented lifestyles and a deep commitment to success. Results, respect and control define success for the Achiever. They prefer unique, scalable, quality service and business-to-business or solution-oriented concepts. <br /><strong>Societal </strong> - A visionary business builder committed to edify, inspire and change the world. Motivated to have an impact on others using their expertise, experience and education. Contribution and freedom defines success for the Societal. They prefer innovative, change, or cause-based concepts that promote others' growth and success. </p>
                          </div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_activities">What work activities do you enjoy?</label><input type="text" name="_fba_activities" id="_fba_activities" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_networking">Are you comfortable attending networking functions to promote your new business?</label><input type="text" name="_fba_networking" id="_fba_networking" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_multi-unit">Are you interested in Multiple-Unit Operation or Masters?</label><input type="text" name="_fba_multi-unit" id="_fba_multi-unit" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_partner">Are you planning on having a partner in the business?</label><input type="text" name="_fba_partner" id="_fba_partner" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_family">How does your family feel about your interest in this?</label><input type="text" name="_fba_family" id="_fba_family" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_employees">What types of employees would you prefer to work with (if any)?</label><input type="text" name="_fba_employees" id="_fba_employees" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_staff">What size staff are you comfortable with?</label><input type="text" name="_fba_staff" id="_fba_staff" /></div>
                          <label className="mb-2 block" htmlFor="_fba_summary">Summary / Notes</label>
                          <textarea className="cmb_textarea" name="_fba_summary" id="_fba_summary" cols={60} rows={10} defaultValue={""} />
                        </div>
                        <div  style={{display: 'none'}}>
                          
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_retirement">What is the value of your 401k/IRA?</label><input type="number" name="_fba_retirement" id="_fba_retirement" /></div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_military">Have you been in the military or could you qualify for a VA loan? Do you qualify for any of these discounts</label>
                            <select name="_fba_military" id="_fba_military">
                              <option value>Select one</option>
                              <option value="Veteran">Veteran</option>
                              <option value="First Responder"> First Responder </option>
                              <option value="Minority">Minority</option>
                              <option value="Woman">Woman</option>
                              <option value="Conversion">Conversion</option>
                              <option value="Existing Franchisee"> Existing Franchisee </option>
                            </select>
                          </div>
                          
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_convicted">Have you or your spouse ever been convicted of something other than a minor traffic violation?</label>
                            <ul className="flex">
                              <li className="mr-4 flex"><input type="radio" className="mr-2" name="_fba_convicted" id="_fba_convicted_yes" defaultValue="true" /><label className="mb-2 block" htmlFor="_fba_convicted_yes">Yes</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_convicted" id="_fba_convicted_no" defaultValue="false" /><label className="mb-2 block" htmlFor="_fba_convicted_no">No</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_litigation">Are you or your spouse subject to a pending litigation or unsatisfied judgment?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_litigation" id="_fba_litigation_yes" defaultValue="true" /><label className="mb-2 block" htmlFor="_fba_litigation_yes">Yes</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_litigation" id="_fba_litigation_no" defaultValue="false" /><label className="mb-2 block" htmlFor="_fba_litigation_no">No</label></li>
                            </ul>
                          </div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_bankruptcy">Have you or your spouse ever declared bankruptcy? If yes, when was it discharged?</label><input type="text" name="_fba_bankruptcy" id="_fba_bankruptcy" /></div>
                          
                        </div>
                        <div  style={{display: 'none'}}>
                          
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_owned_business">Have you ever owned a business before?</label><input type="text" name="_fba_owned_business" id="_fba_owned_business" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_marketing_experience">Do you have any marketing experience?</label><input type="text" name="_fba_marketing_experience" id="_fba_marketing_experience" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_management_experience">Do you have any management experience?</label><input type="text" name="_fba_management_experience" id="_fba_management_experience" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_sales_experience">Do you have sales experience?</label><input type="text" name="_fba_sales_experience" id="_fba_sales_experience" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_financial_experience">Do you have experience in reviewing financial statements?</label><input type="text" name="_fba_financial_experience" id="_fba_financial_experience" /></div>
                          <label className="mb-2 block" htmlFor="_fba_customer_experience">Do you have customer service and account management experience?</label><input type="text" name="_fba_customer_experience" id="_fba_customer_experience" />
                        </div>
                        <div  style={{display: 'none'}}>
                          
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_attractive">What do you find most attractive about being a business owner? </label><input type="text" name="_fba_attractive" id="_fba_attractive" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_not_handle">From your past experience is there anything you prefer not to handle with your new business?</label><input type="text" name="_fba_not_handle" id="_fba_not_handle" /></div>
                          <div className="mb-8"><label className="mb-2 block" htmlFor="_fba_expectations">What are your expectations from the business? What type of lifestyle are you looking to achieve?</label><textarea className="cmb_textarea" name="_fba_expectations" id="_fba_expectations" cols={60} rows={10} defaultValue={""} /></div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_b2b">Do you prefer B2B or B2C?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_b2b" id="_fba_b2b1" defaultValue="Both" /><label className="mb-2 block" htmlFor="_fba_b2b1">Both</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_b2b" id="_fba_b2b2" defaultValue="B2B" /><label className="mb-2 block" htmlFor="_fba_b2b2">B2B</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_b2b" id="_fba_b2b3" defaultValue="B2C" /><label className="mb-2 block" htmlFor="_fba_b2b3">B2C</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_location">Do you prefer a physical location or home-based business model?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_location" id="_fba_location3" defaultValue="Both" /><label className="mb-2 block" htmlFor="_fba_location3">Both</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_location" id="_fba_location1" defaultValue="Home-based" /><label className="mb-2 block" htmlFor="_fba_location1">Home-based</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_location" id="_fba_location2" defaultValue="Physical" /><label className="mb-2 block" htmlFor="_fba_location2">Physical</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_business_type">Would you prefer to have an inventory or service-based business model?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_business_type" id="_fba_business_type3" defaultValue="Both" /><label className="mb-2 block" htmlFor="_fba_business_type3">Both</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_business_type" id="_fba_business_type1" defaultValue="Inventory" /><label className="mb-2 block" htmlFor="_fba_business_type1">Inventory</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_business_type" id="_fba_business_type2" defaultValue="Service" /><label className="mb-2 block" htmlFor="_fba_business_type2">Service</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block" htmlFor="_fba_cold_calling">Are you comfortable with a business that requires cold calling?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_cold_calling" id="_fba_cold_calling3" defaultValue="Both" /><label className="mb-2 block" htmlFor="_fba_cold_calling3">Both</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_cold_calling" id="_fba_cold_calling1" defaultValue="Yes" /><label className="mb-2 block" htmlFor="_fba_cold_calling1">Yes</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_cold_calling" id="_fba_cold_calling2" defaultValue="No" /><label className="mb-2 block" htmlFor="_fba_cold_calling2">No</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_role">Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? <em>(Passive Ownership means the owner is working 15 hours or less per week in the business.)</em></label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_role" id="_fba_role1" defaultValue="Owner/Operator" /><label className="mb-2 block" htmlFor="_fba_role1">Owner/Operator</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_role" id="_fba_role2" defaultValue="Passive" /><label className="mb-2 block" htmlFor="_fba_role2">Passive</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_role" id="_fba_role3" defaultValue="Semi" /><label className="mb-2 block" htmlFor="_fba_role3">Semi</label></li>
                            </ul>
                          </div>
                          <div className="mb-8">
                            <label className="mb-2 block text-green" htmlFor="_fba_hours">Is working standard business hours (9am-5pm) important to you?</label>
                            <ul className="flex">
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_hours" id="_fba_hours3" defaultValue="Both" /><label className="mb-2 block" htmlFor="_fba_hours3">Both</label></li>
                              <li className="flex mr-4"><input type="radio" className="mr-2" name="_fba_hours" id="_fba_hours1" defaultValue="Yes" /><label className="mb-2 block" htmlFor="_fba_hours1">Yes</label></li>
                              <li className="flex"><input type="radio" className="mr-2" name="_fba_hours" id="_fba_hours2" defaultValue="No" /><label className="mb-2 block" htmlFor="_fba_hours2">No</label></li>
                            </ul>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <button type="submit" className="button mr-4">Submit</button>
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
  <div className="modal modal-container" id="territory-check" aria-hidden="true">
    <div className="modal__overlay" tabIndex={-1}>
      <div className="modal__container tc-width md:w-[56rem]" role="dialog" aria-modal="true" aria-labelledby="territory-check-title">
        <header className="modal__header">
          <h2 className="modal__title text-green text-2xl font-bold" id="territory-check-title"> Territory Check </h2>
          <button className="modal__close" aria-label="Close modal"  />
        </header>
        <main className="modal__content" id="territory-check-content">
          
        </main>
      </div>
    </div>
  </div>
</div>

  )
}

export default FormalReg
