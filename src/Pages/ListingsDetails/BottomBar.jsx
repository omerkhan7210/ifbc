import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BarLoader from 'src/Animations/BarLoader';

const BottomBar = ({listingContent}) => {
  const [htmlContent, sethtmlContent] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const page = `listingdetails.aspx?fn=${listingContent?.name}`;
    const url = 'https://corsproxy.io/?' + encodeURIComponent(`http://siddiqiventures-001-site3.ktempurl.com/${page}`);
      try {
        const response = await axios.get(url);
        if(response.data !== ''){
          sethtmlContent(response.data[0]?.content);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [listingContent?.name]);

  useEffect(() => {
    const tabs = document.querySelectorAll('.entry-content ul.tabs li');
    const overview = document.querySelector('.entry-content ul.tabs')?.nextElementSibling;
    const history = document.querySelector('.entry-content ul.tabs')?.nextElementSibling?.nextElementSibling;
    const territories = document.querySelector('.entry-content ul.tabs')?.nextElementSibling?.nextElementSibling?.nextElementSibling;
    const financials = document.querySelector('.entry-content ul.tabs')?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling;
    const resources = document.querySelector('.entry-content ul.tabs')?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling;
    const reviewsnotes = document.querySelector('.entry-content ul.tabs')?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling;

    if(tabs.length>0){
      tabs.forEach(tab=>{
        tab.addEventListener('click',(e)=>{
          const clickedTab = e.target
          const clickedTabText = e.target?.textContent?.trim()?.toLowerCase()
          tabs.forEach(otherTab => {
            if (otherTab !== clickedTab) {
              otherTab.classList.remove("activeTab");
            }
          });
          clickedTab.classList.add("activeTab")
          if(clickedTabText === 'overview'){
            overview.style.display = 'block'
            history.style.display = 'none'
            territories.style.display = 'none'
            financials.style.display = 'none'
            resources.style.display = 'none'
            reviewsnotes.style.display = 'none'
          }
          else if(clickedTabText === 'history'){
            overview.style.display = 'none'
            history.style.display = 'block'
            territories.style.display = 'none'
            financials.style.display = 'none'
            resources.style.display = 'none'
            reviewsnotes.style.display = 'none'
          }
          else if(clickedTabText === 'territories'){
            overview.style.display = 'none'
            history.style.display = 'none'
            territories.style.display = 'block'
            financials.style.display = 'none'
            resources.style.display = 'none'
            reviewsnotes.style.display = 'none'
          }
          else if(clickedTabText === 'financials'){
            overview.style.display = 'none'
            history.style.display = 'none'
            territories.style.display = 'none'
            financials.style.display = 'block'
            resources.style.display = 'none'
            reviewsnotes.style.display = 'none'
          }
          else if(clickedTabText === 'resources'){
            overview.style.display = 'none'
            history.style.display = 'none'
            territories.style.display = 'none'
            financials.style.display = 'none'
            resources.style.display = 'block'
            reviewsnotes.style.display = 'none'
          }
          else if(clickedTabText === 'reviews & notes'){
            overview.style.display = 'none'
            history.style.display = 'none'
            territories.style.display = 'none'
            financials.style.display = 'none'
            resources.style.display = 'none'
            reviewsnotes.style.display = 'block'
          }
        })
      })
    }
   
  }, []);

  return (
    <article id="post-599099" className="mt-10 md:col-span-2 lg:col-span-3 post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement">
      <h3 className="text-4xl font-bold text-custom-heading-color uppercase mb-0 text-center">{listingContent?.name}</h3>

    {htmlContent ?
    <div className="post post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement" id="post-599099">
      <div className="mb-8" >
       
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="post post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement" id="post-599099">
        
        </div>
      </div>
    </div>
    :
   <BarLoader/>
    }
  </article>
  )
}

export default BottomBar
