import React from "react";
import "../style/Hero.css";
import bannerImg from "../assets/banner.png";
import icon1 from "../assets/icons-01.png";
import icon2 from "../assets/icons-02.png";
import icon3 from "../assets/icons-03.png";
import icon4 from "../assets/icons-04.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 left-side">
              <div className="first-box">
                <div>
                  <div className="d-flex">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <div className="star-text">
                    <h2>20,000+ TRUST CUSTOMER</h2>
                  </div>
                </div>
                <div>
                  <div className="enamato">
                    <div className="star"></div>
                  </div>
                  <div className="enamato-text">
                    <h2>ENVATO ELITE AUTHOR</h2>
                  </div>
                </div>
              </div>
              <div className="sec-box">
                <h1>
                  {" "}
                  Have your dream site in minutes for{" "}
                  <span className="gradient-text"> University</span>
                </h1>
              </div>
              <div className="third-box">
                <p>
                  The most <span className="bold-underline">powerful</span> yet
                  the <span className="bold-underline">easiest</span> theme
                  ever.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 right-side">
              <div>
                <img
                  src={bannerImg}
                  alt="Banner Background"
                  loading="lazy"
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                ></img>
              </div>
              <div className="side-btn">
                <h2>Features Request</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="icon-box">
        <div className="container">
          <div className="row icon-box-content">
            <div className="col-sm-12 col-lg-4 card">
              <figure>
                <img
                  src={icon1}
                  alt="Icon with fast performance description"
                  loading="lazy"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                ></img>
              </figure>
              <figcaption>
                <h1>Fast Performance</h1>
                <p>
                  Optimized for a smaller build size, faster dev compilation and
                  dozens of other improvements
                </p>
              </figcaption>
            </div>
            <div className="col-sm-12 col-lg-4 card">
              <figure>
                <img
                  src={icon2}
                  alt="Icon with perfect theme description"
                  loading="lazy"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                ></img>
              </figure>
              <figcaption>
                <h1>Perfect Responsive</h1>
                <p>
                  Our Theme is full perfect for all device. You can visit our
                  theme all device easily.
                </p>
              </figcaption>
            </div>
            <div className="col-sm-12 col-lg-4 card">
              <figure>
                <img
                  src={icon3}
                  alt="Icon with fast and friendly description"
                  loading="lazy"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                ></img>
              </figure>
              <figcaption>
                <h1>Fast and Friendly Support</h1>
                <p>
                  We are provide 24 hours support for all clients. You can
                  purchase without hesitation.
                </p>
              </figcaption>
            </div>
            <div className="col-sm-12 col-lg-4 card">
              <figure>
                <img
                  src={icon4}
                  alt="Icon with fast easy to use description"
                  loading="lazy"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                ></img>
              </figure>
              <figcaption>
                <h1>Easy to Use</h1>
                <p>
                  Create your own custom Theme or section by copying, pasting,
                  and assembling.
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
