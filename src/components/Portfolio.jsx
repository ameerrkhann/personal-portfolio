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
    {
      title: "Quiz App",
      projectInfo: "This interactive Quiz App is designed to provide users with a dynamic and engaging way to test their knowledge across various topics. It features a sleek and minimalist design, with smooth animations for an enhanced user experience. The app is fully responsive, ensuring a consistent experience across all devices.",
      technologies: "HTML, CSS, React.js, Framer Motion",
      industry: "App",
      date: "February, 2024",
      url: { name: "Ameer's Quiz", link: "https://ameers-quiz.netlify.app/"},
      thumbImage: "images/projects/welcomepage.png",
      sliderImages: [ "images/projects/quizpage.png", "images/projects/quizend.png" ],
      // categories: [filters.BRAND],
    },
    {
      title: "The Limo Company Website",
      projectInfo: "A professional website designed for The Limo Company, a luxury transportation service. Built using WordPress with custom-coded sections, the site features a sleek and modern design, an intuitive booking system, and optimized performance for seamless user experience. The site is fully responsive, ensuring accessibility across all devices while maintaining high-speed performance and elegant aesthetics.",
      technologies: "WordPress, HTML, CSS, JavaScript, PHP",
      industry: "Website",
      date: "December, 2024",
      url: { name: "The Limo Company", link: "https://thelimocompany.ca/" },
      thumbImage: "images/projects/tlc.png",
      sliderImages: [ "images/projects/tlc 2.png", "images/projects/tlc 3.png" ],
      // categories: [filters.WEBSITE],
    },
    {
      title: "ZB Tax Solutions Website",
      projectInfo: "This website was created for ZB Tax Solutions, a business offering accounting and bookkeeping services. Designed using WordPress, the site features a professional, user-friendly interface that highlights the company's services, provides easy navigation, and is optimized for both desktop and mobile devices. It also includes client-friendly contact forms and integrated service details for accessibility.",
      technologies: "WordPress, Elementor, HTML, CSS",
      industry: "Website",
      date: "February, 2025",
      url: { name: "ZB Tax Solutions", link: "https://zbtax.ca/" },
      thumbImage: "images/projects/zb.png",
      sliderImages: [ "images/projects/zb 2.png", "images/projects/zb 3.png" ],
      // categories: [filters.WEBSITE],
    },
    {
      title: "S&P 500 Stock Dashboard",
      projectInfo: "A fully interactive, multi-page data analytics dashboard built using Plotly Dash. This project visualizes five years of S&P 500 stock data, allowing users to explore trends such as average closing prices, trading volume, and year-over-year performance. The dashboard features a modern dark UI, KPI cards, data filtering by year, and top-30 stock rankings for cleaner insights. Designed with a responsive layout and clean code architecture suitable for real-world data analysis applications.",
      technologies: "Python, Plotly Dash, Pandas, Dash Bootstrap Components",
      industry: "Data Analytics / Dashboard",
      date: "November, 2025",
      url: { name: "GitHub Repository", link: "https://github.com/ameerrkhann/sp500-stock-dashboard/tree/main" },
      thumbImage: "images/projects/sp500-dashboard.png",
      sliderImages: [
        "images/projects/sp500-dashboard-2.png",
        "images/projects/sp500-dashboard-3.png"
      ],
      // categories: [filters.DASHBOARD],
    },
    {
      title: "Real-Time Weather Dashboard",
      projectInfo:
        "A fully interactive Power BI dashboard that visualizes real-time weather data using a live Weather API. The project features current conditions, a 7-day forecast, hourly trends, dynamic weather icons, and key metrics such as wind speed, humidity, visibility, UV index, pressure, and precipitation. Built with a modern dark UI theme, the dashboard integrates live API calls, advanced DAX measures, and optimized data modeling for seamless city-based filtering.",
      technologies: "Power BI, DAX, Power Query (M), WeatherAPI, Data Modeling",
      industry: "Data Visualization",
      date: "November, 2025",
      url: {
        name: "Live Dashboard",
        link: "https://utoronto-my.sharepoint.com/:u:/g/personal/ameer_khan_mail_utoronto_ca/EbxCs3D3QqdLuJKPUyjyXmIBhe3vv_Uxv6GKk48UN4RvVA?e=7woVbq"
      },
      thumbImage: "images/projects/dashboard.png",
      sliderImages: [
        // no extras
      ],
      // categories: [filters.DATA_VIZ],
    },
    {
      title: "VulnScanner",
      projectInfo:
        "A modular Python network vulnerability scanner that combines TCP port discovery with NVD CVE lookups to produce risk-scored vulnerability reports. Features both a CLI and an interactive Streamlit web dashboard with live terminal feed, colour-coded results, and scan history.",
      technologies: "Python, Nmap, NVD API v2, Streamlit",
      industry: "Cybersecurity Tool",
      date: "March, 2026",
      url: {
        name: "GitHub Repository",
        link: "https://github.com/ameerrkhann/vulnscanner"
      },
      thumbImage: "images/projects/vul.jpeg",
      sliderImages: [],
      // categories: [filters.CYBERSECURITY],
    }


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
