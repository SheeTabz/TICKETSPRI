import React from "react";
import "../Passengers/Passenger.css";

export default function Services() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-pannels">
              <p>Enter Passenger Details</p>
              <p>You have selected 1 seat 7C</p>

              <div className="row">
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Nationality</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Gender</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Code</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">ID type</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">Age</label>
                    <input
                      type="number"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Mobile Number</label>
                    <input
                      type="number"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">ID No</label>
                    <input
                      type="number"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="input-group">
                    <label htmlFor="">Usual Residence</label>
                    <input
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-pannels">
              <p>Details of Person Paying</p>
              <p>Your will get Mpesa Notification on Below Mobile Number</p>
              <div className="col-md-8">
                <div className="input-group-2">
                  <label htmlFor="">Payee Name</label>
                  <input type="text" id="payee_name" className="input_field" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group-2">
                  <label htmlFor="">Mobile No</label>
                  <input
                    type="number"
                    id="mobile_name"
                    className="input_field"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group-2">
                  <label htmlFor="">Email</label>
                  <input type="email" id="mail_name" className="input_field" />
                </div>
              </div>
            </div>

            <div className="form-pannels">
              <p>Select Payment Options</p>
              <p>
                You will be redirected to related website to do this transaction
              </p>
              <p>
                <span>M-Pesa</span>
              </p>
              <p>
                By clicking on "Make Payment" below, I agree to the Terms and
                Conditions
              </p>

              <button className="button" type="submit">
                PROCEED TO BOOK
              </button>
            </div>
          </div>

          <div className="col-md-6" id="table">
            <p>Passenger Details</p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Seat</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Total Fare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7c</td>
                  <td>34</td>
                  <td>Male</td>
                  <td>KES 1,200</td>
                </tr>
                {/* <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
