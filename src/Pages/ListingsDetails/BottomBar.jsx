import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import BarLoader from "src/Animations/BarLoader";
import { MyContext } from "src/Context/ListingDataContext";

const BottomBar = ({ listingContent }) => {
  const [htmlContent, sethtmlContent] = useState(null);
  const { role } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const page = `listing_details.aspx?fn=${listingContent?.name}`;
      const url =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          `http://siddiqiventures-001-site3.ktempurl.com/${page}`
        );
      try {
        const response = await axios.get(url);
        if (response.data !== "") {
          sethtmlContent(response.data[0]?.content);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [listingContent?.name]);

  useEffect(() => {
    const document = window.document;
    if (typeof window !== "undefined") {
      const tabs = document.querySelectorAll(".entry-content ul.tabs li");
      const tabContents = {
        overview: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling,
        history: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling?.nextElementSibling,
        territories: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling?.nextElementSibling?.nextElementSibling,
        financials: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling?.nextElementSibling?.nextElementSibling
          ?.nextElementSibling,
        resources: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling?.nextElementSibling?.nextElementSibling
          ?.nextElementSibling?.nextElementSibling,
        reviewsnotes: document.querySelector(".entry-content ul.tabs")
          ?.nextElementSibling?.nextElementSibling?.nextElementSibling
          ?.nextElementSibling?.nextElementSibling?.nextElementSibling,
      };

      if (tabs.length > 0) {
        tabs[0].classList.add("activeTab");
        tabs.forEach((tab) => {
          tab.addEventListener("click", (e) => {
            const clickedTab = e.target;
            const clickedTabText = e.target?.textContent?.trim()?.toLowerCase();
            tabs.forEach((otherTab) => {
              if (otherTab !== clickedTab) {
                otherTab.classList.remove("activeTab");
              }
            });
            clickedTab.classList.add("activeTab");

            for (const content in tabContents) {
              if (tabContents[content]) {
                tabContents[content].style.display = "none";
              }
            }

            if (tabContents[clickedTabText]) {
              tabContents[clickedTabText].style.display = "block";
            }
          });
        });
      }

      //accordion btns
      const accordianButtons = document.querySelectorAll(".accordion button");
      accordianButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const clickedBtnDiv = e.target.nextElementSibling;
          if (clickedBtnDiv.style.display === "none") {
            clickedBtnDiv.style.display = "block";
          } else {
            clickedBtnDiv.style.display = "none";
          }
        });
      });

      //hide fdd summaries
      const fddCustomReports = document.querySelector(".fdd-custom-reports");
      if (fddCustomReports) {
        fddCustomReports.style.display = "none";
        fddCustomReports.previousElementSibling.previousElementSibling.style.display =
          "none";
      }

      //map
      const mapPaths = document.querySelectorAll("#vmapusa svg path");
      mapPaths.forEach((path) => {
        const fillColor = path.getAttribute("fill");
        if (fillColor === "#30917F") {
          path.setAttribute("fill", "#304891");
        } else if (fillColor === "#c0ded8") {
          path.setAttribute("fill", "#bac7db");
        }
      });

      //map guide dots
      const vmapusa = document.querySelector("#vmapusa");
      if (vmapusa) {
        const two =
          vmapusa.nextElementSibling.nextElementSibling.nextElementSibling;
        const three =
          vmapusa.nextElementSibling.nextElementSibling.nextElementSibling
            .nextElementSibling;
        if (two && three) {
          two.children[0].style.background = "#bac7db";
          three.children[0].style.background = "#304891";
        }
      }

      //remove item button
      const itemButtons = document.querySelectorAll(".button.tertiary-button");
      itemButtons.forEach((btn) => {
        btn.style.display = "none";
      });

      const AllTabsContainer = document.querySelectorAll(
        ".entry-content>div>div"
      );
      if (AllTabsContainer[3]) {
        const headings = AllTabsContainer[3].querySelectorAll("h2");
        headings.forEach((heading) => {
          if (
            heading.textContent === "Commission" &&
            (role === "C" || role === "N")
          ) {
            heading.style.display = "none";
            heading.nextElementSibling.style.display = "none";
            heading.nextElementSibling.nextElementSibling.style.display =
              "none";
            heading.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
              "none";
            if (
              heading.nextElementSibling.nextElementSibling.nextElementSibling
                .nextElementSibling
            ) {
              heading.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display =
                "none";
            }
          }
        });
      }
      if (tabs[5]) {
        tabs[5].style.display = "none";
      }
    }
  }, [htmlContent]);

  return (
    <article
      id="post-599099"
      className="mt-10 md:col-span-2 lg:col-span-3 post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement"
    >
      <h3 className="text-4xl font-bold text-custom-heading-color uppercase mb-0 text-center">
        {listingContent?.name}
      </h3>

      {htmlContent ? (
        <div
          className="post post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement"
          id="post-599099"
        >
          <div className="mb-8">
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="post post-599099 fba-franchise type-fba-franchise status-publish has-post-thumbnail hentry concept_categories-business-services concept_categories-home-improvement"
              id="post-599099"
            ></div>
          </div>
        </div>
      ) : (
        <BarLoader />
      )}
    </article>
  );
};

export default BottomBar;
