import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  const skillCategories = [
    {
      name: "Languages",
      icon: "fas fa-code",
      techs: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "R", icon: "devicon-r-plain colored" },
        { name: "LaTeX", icon: "devicon-latex-original" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: "fas fa-layer-group",
      techs: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Sass", icon: "devicon-sass-original colored" },
      ],
    },
    {
      name: "Cloud Services",
      icon: "fa-brands fa-aws",
      techs: [
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "S3", icon: "fas fa-database" },
        { name: "Lambda", icon: "fas fa-bolt" },
        { name: "CloudFormation", icon: "fas fa-cubes" },
      ],
    },
    {
      name: "Developer Tools",
      icon: "fas fa-screwdriver-wrench",
      techs: [
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "PyCharm", icon: "devicon-pycharm-plain colored" },
        { name: "IntelliJ", icon: "devicon-intellij-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
      ],
    },
    {
      name: "Design",
      icon: "fas fa-palette",
      techs: [
        { name: "Logo Design", icon: "fas fa-bezier-curve" },
        { name: "UI/UX", icon: "fas fa-object-group" },
        { name: "Branding", icon: "fas fa-paint-brush" },
        { name: "Advertising", icon: "fas fa-bullhorn" },
      ],
    },
    {
      name: "Soft Skills",
      icon: "fas fa-user-graduate",
      techs: [
        { name: "Self-learning", icon: "fas fa-book-open" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Work Ethic", icon: "fas fa-briefcase" },
        { name: "Critical Thinking", icon: "fas fa-brain" },
      ],
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5" data-aos="fade-up">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Can Do?
            <span className="heading-separator-line border-bottom border-4 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {skillCategories.map((category, index) => (
                <div
                  className="col-md-6"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={
                      "skill-category-card rounded p-4 mb-4 " +
                      (darkTheme ? "bg-dark-1" : "bg-white")
                    }
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className={
                          "skill-category-icon rounded d-flex align-items-center justify-content-center me-3 " +
                          (darkTheme ? "bg-dark-2" : "")
                        }
                      >
                        <i className={category.icon + " text-primary"} />
                      </div>
                      <h3
                        className={
                          "mb-0 text-5 fw-600 " +
                          (darkTheme ? "text-white" : "")
                        }
                      >
                        {category.name}
                      </h3>
                    </div>
                    <div className="d-flex flex-wrap">
                      {category.techs.map((tech, i) => (
                        <span
                          key={i}
                          className={
                            "tech-badge " +
                            (darkTheme ? "tech-badge-dark" : "")
                          }
                        >
                          <i className={tech.icon} />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
