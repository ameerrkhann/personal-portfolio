import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  // Commented out the filters for Design, Brand, and Photos
  // const filters = {
  //   DESIGN: "Desing",
  //   BRAND: "Brand",
  //   PHOTOS: "Photos",
  // };

  const projectsData = [
    // Commented out categories related to DESIGN, BRAND, and PHOTOS
    {
      title: "Interactive Tree-Map Visualizer",
      projectInfo: "This project aims to create a dynamic visualization tool for representing complex hierarchical data with precision. Utilizing trees, a fundamental data structure, it models hierarchical relationships akin to file organization on computers. It uniquely visualizes data with associated sizes or weights, like file sizes or departmental metrics, using interactive treemaps. Treemaps display data through proportionally scaled rectangles, offering an intuitive overview of both hierarchical and quantitative data aspects. ",
      technologies: "Python",
      industry: "Visualizer",
      date: "January, 2023",
      url: { name: "N/A",},
      thumbImage: "images/projects/treemap.png",
      sliderImages: [ "images/projects/tree.png", "images/projects/treelogo.png" ],
      // categories: [filters.BRAND],
    },
    {
      title: "Trip-Sharing Simulation App",
      projectInfo: "Our project, similar to Uber, aims to enhance the ride-sharing experience with a user-friendly interface and intelligent route planning. This system emphasizes minimizing rider wait times and maximizing driver earnings through smart dispatch and route planning. The Monitor tracks all activities, providing insights into system performance and the balance between rider demand and driver supply. Our simulation offers a detailed perspective on optimizing ride-sharing dynamics, focusing on user satisfaction and operational efficiency within an engaging digital environment.      ",
      technologies: "Python",
      industry: "App",
      date: "July, 2023",
      url: { name: "N/A",},
      thumbImage: "images/projects/rideapp.png",
      sliderImages: [ "images/projects/rideshare.png", "images/projects/ridelogo.png" ],
      // categories: [filters.BRAND],
    },
    {
      title: "Web Development",
      projectInfo: "This platform is a comprehensive staffing solution designed to bridge the gap between job seekers, employers, and franchisees by providing access to valuable resources, job listings, and industry insights. Developed by a team including a Website Developer from Studenttimes, it leverages a full-stack web application to effectively present the company’s information and goals. Through the adept use of web technologies such as JavaScript, and HTML/CSS, the platform is tailored to attract the targeted audience, enhancing the company's online presence.",
      technologies: "HTML, CSS",
      industry: "Website",
      date: "January, 2023",
      url: { name: "Studenttimes Staffing Solutions", link: "https://studenttimes.com/"},
      thumbImage: "images/projects/webdev.png",
      sliderImages: [ "images/projects/studenttimes.png", "images/projects/studentcontact.png" ],
      // categories: [filters.BRAND],
    },
    
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section id="portfolio" className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}>
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2 className={"text-24  text-uppercase fw-600 w-100 mb-0 " + (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")}>Portfolio</h2>
            <p className={"text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " + (darkTheme ? "text-white" : "text-dark")}> My Work<span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" /></p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul className={"portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " + (darkTheme ? "nav-light" : "")}>
            <li className="nav-item">
              <button className={"nav-link " + (filterKey === "*" ? "active" : "")} onClick={handleFilterKeyChange("*")}>All</button>
            </li>
            {/* Filters for Design, Brand, and Photos commented out */}
            {/* {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button className={"nav-link " + (filterKey === filters[oneKey] ? "active" : "")} onClick={handleFilterKeyChange(filters[oneKey])}>{filters[oneKey]}</button>
              </li>
            ))} */}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 && projectsData.map((project, index) => (
                <div className={"col-sm-6 col-lg-4 filter-item "} key={index}> {/* Removed category classes */}
                  <div className="portfolio-box rounded">
                    <div className="portfolio-img rounded">
                      <img onLoad={() => { setimagesLoaded(imagesLoaded + 1); }} className="img-fluid d-block portfolio-image" src={project.thumbImage} alt="" />
                      <div className="portfolio-overlay">
                        <a className="popup-ajax stretched-link" href="" onClick={() => { setSelectedProjectDetails(projectsData[index]); }} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        <div className="portfolio-overlay-details">
                          <h5 className="text-white fw-400">{project.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal projectDetails={selectedProjectDetails} darkTheme={darkTheme}></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
