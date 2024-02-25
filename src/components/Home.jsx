import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Tooltip } from "./Tooltip";

const glyphs = 'أ، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ع، غ، ف، ق، ك، ل، م، ن، هـ، و، ي، ء، ئ، آ، إ، ا، ة، ى، لا، كم، ي'.split('، ');

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  const [decodedText, setDecodedText] = useState([]);

  useEffect(() => {
    const targetText = "Welcome";
    let index = 0;

    const decode = () => {
      if (index <= targetText.length) {
        const newText = targetText
          .substring(0, index)
          .split("")
          .map((char) => ({ char, morphing: false }));
        if (index < targetText.length) {
          newText.push({
            char: glyphs[Math.floor(Math.random() * glyphs.length)],
            morphing: true,
          });
        }
        setDecodedText(newText);
        index++;
        setTimeout(decode, 340); // Adjust the speed of the decoding effect here
      } else {
        setDecodedText(
          targetText.split("").map((char) => ({ char, morphing: false }))
        );
      }
    };

    decode();
  }, []);

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />
        <div className="hero-bg parallax" style={{ backgroundImage: 'url("images/intro.png")' }}></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">
                  {decodedText.map((item, index) => (
                    <span
                      key={index}
                      className={item.morphing ? "morphing" : ""}
                    >
                      {item.char}
                    </span>
                  ))}
                </p>
                <h2 className="text-13 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "I'm a Content Creator.",
                        "I'm a Web Developer.",
                        "I'm a Software Engineer.",
                        "I'm a Graphic Designer.",
                        "I'm an Entrepreneur.",
                        "I'm a Mentor.",
                        "I'm a Freelancer.",
                        "I'm a Programmer.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-4 text-light mb-4">
                  Currently studying Computer Science at UofT.
                </p>
                <Tooltip text="LinkedIn" placement="top">
                  <a
                    href="https://www.linkedin.com/in/ameermohammadkhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary rounded-pill shadow-none"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
