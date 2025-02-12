import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClassicHeader from "./components/ClassicHeader";
import { commonConfig } from "./config/commonConfig";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";

function App() {
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;
  
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    // Load Chatbase chatbot script dynamically
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.id = "9GiYuvtxew2tXgivGqGer"; // Replace with your actual Chatbot ID
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");
    if (scrollTopBtn) {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <>
      <div style={{ position: "relative" }} className={classicHeader ? "" : "side-header"}>
        {isLoading && <PreLoader></PreLoader>}
        <div id="main-wrapper">
          {classicHeader ? <ClassicHeader /> : <Header />}
          <div id="content" role="main">
            <Home classicHeader={classicHeader} darkTheme={darkTheme} />
            <AboutUs classicHeader={classicHeader} darkTheme={darkTheme} />
            <Services classicHeader={classicHeader} darkTheme={darkTheme} />
            <Resume classicHeader={classicHeader} darkTheme={darkTheme} />
            <Portfolio classicHeader={classicHeader} darkTheme={darkTheme} />
            <Contact classicHeader={classicHeader} darkTheme={darkTheme} />
          </div>
          <Footer classicHeader={classicHeader} darkTheme={darkTheme} />
        </div>

        {/* Back to top button */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
