import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ padding: "10px" }}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">A Little About Myself</h5>
                  <p className="card-text">
                  My name is Dempsey Finley and I am a full stack website delevoper. I live in Atlanta, Georgia, 
                                    where I recived an Network Systems Administration degree from DeVry University, and I am currently enrolled in a Georgia Tech Coding Boot Camp.
                                    I am well versed in both front-end and back-end computing languages, along with many Cisco server-side languages.</p>
                </div>
              </div>
            </div>
            <div className="col-12" style={{ margin: "15px" }}>
              <a href="https://github.com/Dempsey496" className="btn btn-primary" style={{ margin: "15px" }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/dempsey-finley-price-81ba651b3/" className="btn btn-primary" style={{ margin: "15px" }}>
                linkedIn
              </a>
              <a href="https://docs.google.com/document/d/141BMl7dCCfk5fZoqUzJQx8KJG5aJLEGOzHILAYQXRbM/edit?usp=sharing" className="btn btn-primary" style={{ margin: "15px" }}>
                Resume
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
