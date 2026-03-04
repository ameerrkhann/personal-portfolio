import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022 - Present",
      title: "Bachelor of Science",
      place: "University of Toronto",
      desc: "Computer Science, Applied Statistics and Minor in Mathematics.",
    },
    {
      yearRange: "2025 - Present",
      title: "Microsoft AZ 900",
      place: "Udemy",
      desc: "An online course made for beginners to learn about Azure Fundamentals.",
    },
    {
      yearRange: "2025 - Present",
      title: "CompTIA Security+",
      place: "Udemy",
      desc: "A globally recognized certification that validates foundational skills in cybersecurity, risk management, and network security.",
    },
  ];

  const experienceDetails = [
    {
    yearRange: "2025 - Present",
    title: "Customer Experience Associate",
    place: "Scotiabank",
    desc: "Assist clients with day-to-day banking needs while providing high-quality customer service, problem-solving support, and financial guidance to ensure smooth and secure banking experiences.",
    },
    {
    yearRange: "2025 - Present",
    title: "Short-Term Rental Property Manager",
    place: "Self-Employed",
    desc: "Manage short-term rental properties, overseeing operations including bookings, guest communication, pricing strategy, maintenance coordination, and ensuring a seamless hospitality experience.",
    },
    {
      yearRange: "2024 - 2024",
      title: "Mobile App Developer Intern",
      place: "GoKaddal Technologies",
      desc: "Led the development of a dynamic mobile application using HTML, CSS, and JavaScript, optimizing app architecture and user interface to align with the latest industry standards and branding.",
    },
    {
      yearRange: "2021 - 2021",
      title: "Web Developer & Marketing Intern",
      place: "Studenttimes Staffing Solutions",
      desc: "Worked as a Website Developer at Studenttimes, responsible for providing instruction, designing and coding a full-stack web application for the company.",
    },
    {
      yearRange: "2022 - 2024",
      title: "FBA Business Owner",
      place: "Amazon FBA",
      desc: "Operate an Amazon FBA business focusing on online arbitrage, sourcing a diverse range of products and managing the end-to-end process of inventory, marketing, and sales to ensure a seamless e-commerce operation.",
    },
    {
      yearRange: "2019 - 2021",
      title: "Shopify Online Store",
      place: "E-commerce",
      desc: "Created and managed a Shopify online store specializing in the sale of workout equipment, leveraging digital marketing strategies to grow the customer base.",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5" data-aos="fade-up">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
              data-aos="fade-up"
            >
              My Education
            </h2>
            <div className="timeline">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div
                    key={index}
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay={index * 150}
                  >
                    <div className={"timeline-dot " + (darkTheme ? "bg-primary" : "bg-primary")} />
                    <div
                      className={
                        "timeline-content rounded p-4 " +
                        (darkTheme ? "bg-dark" : "bg-white border")
                      }
                    >
                      <p className="badge bg-primary text-2 fw-400">
                        {value.yearRange}
                      </p>
                      <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                        {value.title}
                      </h3>
                      <p className={darkTheme ? "text-primary" : "text-danger"}>
                        {value.place}
                      </p>
                      <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
              data-aos="fade-up"
            >
              My Experience
            </h2>
            <div className="timeline">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div
                    key={index}
                    className="timeline-item"
                    data-aos="fade-left"
                    data-aos-delay={index * 150}
                  >
                    <div className={"timeline-dot " + (darkTheme ? "bg-primary" : "bg-primary")} />
                    <div
                      className={
                        "timeline-content rounded p-4 " +
                        (darkTheme ? "bg-dark" : "bg-white border")
                      }
                    >
                      <p className="badge bg-primary text-2 fw-400">
                        {value.yearRange}
                      </p>
                      <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                        {value.title}
                      </h3>
                      <p className={darkTheme ? "text-primary" : "text-danger"}>
                        {value.place}
                      </p>
                      <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Download Resume */}
        <div className="text-center mt-5" data-aos="fade-up">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
