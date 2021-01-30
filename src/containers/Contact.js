import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="container" style={{padding: "10px"}}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Reach Out</h5>

                  <input className="input" type="text" placeholder="Name" id="userName"/>
                  <br />
                  <input className="input" type="text" placeholder="Email" id="userEmail"/>
                  <br />
                  <input className="input" type="text" placeholder="Message" id="userMessage"/>
                  <br />

                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
