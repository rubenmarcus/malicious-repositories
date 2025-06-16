import { Slides } from "./Slides";
import Slide1 from "../images/Slidebg-1.jpg";
import Slide2 from "../images/Slidebg-2.jpg";
import Slide3 from "../images/Slidebg-3.jpg";
export const IContent9 = () => {
  const slideData = [
    {
      index: 0,
      headline: "Slide 1",
      src: Slide1, // Replace with your image URL
      button: "Learn More",
    },
    {
      index: 1,
      headline: "Slide 2",
      src: Slide2, // Replace with your image URL
      button: "Explore",
    },
    {
      index: 2,
      headline: "Slide 3",
      src: Slide3, // Replace with your image URL
      button: "Get Started",
      backgroundColor: "blue", // Replace with your desired background color
    },
    // Add more slides as needed
  ];

  return (
    <div className="IContent9">
      <div className="topTitle">
        <div id="line"></div>
        <div>
          <div className="text">
            <span className="title title1">New In</span>{" "}
            <span className="title title2">MUNITY</span>{" "}
          </div>
        </div>

        <div id="line"></div>
      </div>
      <div className="bottomImg">
        <div
          className="daoImg"
          style={{
            // border: "1px solid lightblue",
            width: "100vw",
            height: "195px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Slides slides={slideData} heading="Example Slider" />
        </div>
        <div className="rightText">
          <div>
            <span className="type1 lgText">
              MUNITY{" "}
              <span className="type2 lgText">
                Studios specializes in creating{" "}
              </span>
              <span className="type2 lgText">high-quality 3D</span>
              <span className="type2 lgText"> art and animations. </span>
            </span>
          </div>
          <div>
            <span className="type3">
              Since 2019, our seasoned team with 25+ years of management
              experience has been at the forefront of EMEA and Asia gaming. With
              our motto, "Feed Your Gaming Soul," we're your gateway to the
              immersive world of web3 gaming{" "}
              <span className="type4">Read More.</span>
            </span>
          </div>
          <div>
            <div className="bottomBtn">
              Read Now{" "}
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
