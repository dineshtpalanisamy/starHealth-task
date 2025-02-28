import "../style/Choose.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling
import icon1 from "../assets/01.png";
import icon2 from "../assets/02.png";
import icon3 from "../assets/03.png";
import arrowDown from "../assets/arrow-down.png";
const Choose = () => {
  return (
    <>
      <section className="choose">
        <div className="container ">
          <h1 className="all">ALL IN ONE THERE</h1>
          <h2 className="why">Why Choose Histudy.</h2>
        </div>
        <div className="container">
          <div className="row" style={{ gap: "10px" }}>
            <div className="col-sm-12 col-lg-4 card-one">
              <div>
                <h1>FOR ONLINE COURSE</h1>
                <h2>
                  Create Your Online
                  <br />
                  Courses Website.
                </h2>
              </div>
              <div>
                <img
                  src={icon1}
                  alt="Create your own websites"
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                ></img>
              </div>
              <div className="list-item">
                <div className="list-tag">Individual instructor</div>
                <div className="list-tag">Multiple instructor</div>
                <div className="list-tag">Market place</div>
                <div className="list-tag">Single course</div>
                <div className="list-tag">Like Udemy</div>
                <div className="list-tag">& More</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 card-two">
              <div>
                <h1>FOR UNIVERSITY OR SCHOOL EDUCATION</h1>
                <h2>
                  Create Your Education
                  <br />
                  Website.
                </h2>
              </div>
              <div>
                <img
                  src={icon2}
                  alt="Create your own websites"
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                ></img>
              </div>
              <div className="list-item">
                <div className="list-tag">Higher Education</div>
                <div className="list-tag">Universitys</div>
                <div className="list-tag">Kindergardern </div>
                <div className="list-tag">Pre School</div>
                <div className="list-tag">High School</div>
                <div className="list-tag">& More</div>
              </div>
            </div>
            <div className="col card-three">
              <div>
                <h1>FOR PROFESSIONAL COACHING</h1>
                <h2>
                  Create Your Coaching
                  <br />
                  and Training Websites
                </h2>
              </div>
              <div>
                <img
                  src={icon3}
                  alt="Create your own websites"
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                ></img>
              </div>
              <div className="list-item">
                <div className="list-tag">Language Academy</div>
                <div className="list-tag">Gym Coaching</div>
                <div className="list-tag">Career Training</div>
                <div className="list-tag">Life Coaching</div>
                <div className="list-tag">Like Udemy</div>
                {/* <div className="list-tag">& More</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient">
        <div className="container num">
          <div className="number">15+</div>
          <div className="desc">
            <h1>
              World Class <br /> Stunnig Demos
            </h1>
            <h2 style={{ color: "black" }}>
              <b>Best-in-class designs to get started</b>
            </h2>
            <h2 className="lite-txt">
              Use any demo or Theme for education website. You can mix and match
              all the demos and templates.
            </h2>
            <p>
              Create a complete education website with a lots of demo page and
              250+ section blocks to create a unique site.
            </p>
            <div className="arrow">
              <img
                src={arrowDown}
                alt="Arrow symbol"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              ></img>
            </div>
            <div className="round-box">
              <div className="round-box-1">Primary Details</div>
              <div className="round-box-2">Offer Details</div>
              <div className="round-box-3">Address Details</div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-type">
        <div className="container form-sheet">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 user-content">
              <label className="user-dts">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="user-input"
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 user-content">
              <label className="user-dts">Email</label>
              <input
                type="email"
                placeholder="Enter Mail"
                className="user-input"
              />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 user-content">
              <label className="user-dts">Gender</label>
              <div className="gender-container">
                <label className="gender-box">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="gender-box">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 user-content">
              <label className="user-dts">Mobile</label>
              <input
                type="number"
                placeholder="Enter Number"
                className="user-input"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
