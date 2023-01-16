import React, { useState } from "react";
import Footer from "../Footer";
import NavBar2 from "../NavBar2";
// import { useNavigate } from "react-router-dom";
import "../Passengers/Passenger.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Services() {
  const [firstname, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [identity, setIdentity] = useState("");
  const [payeename, setPayeeName] = useState("");
  const [payeephone, setPayeePhone] = useState("");
  const [mail, setMail] = useState("");
  // const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "src/components/Passengers/Payment.jsx";
    // navigate("");
    fetch("/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        gender,
        age,
        lastname,
        phone,
        identity,
        payeename,
        payeephone,
        mail,
      }),
    }).then();
  }

  return (
    <div>
      <NavBar2/>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit} method="post" className="col-md-6">
            <div className="form-pannels">
              <p>Enter Passenger Details</p>
              <p>You have selected 1 seat 7C</p>

              <div className="row">
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">First Name</label>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstname}
                      required
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Nationality</label>
                    <input
                      type="text"
                      id="nationality"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Gender</label>

                    <input
                      type="text"
                      id="gender"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                      required
                      className="input_field"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastname}
                      id="last_name"
                      required
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Code</label>
                    <input
                      placeholder="+254"
                      type="text"
                      id="first_name"
                      className="input_field"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">ID type</label>
                    <input
                      type="text"
                      id="id_type"
                      className="input_field"
                      placeholder="passport/student/N id"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group">
                    <label htmlFor="">Age</label>
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      value={age}
                      required
                      maxLength={2}
                      min="7"
                      max="92"
                      type="number"
                      id="age"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Mobile Number</label>
                    <input
                      type="number"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      maxLength={10}
                      minLength={10}
                      required
                      placeholder="07XXX"
                      className="input_field"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="">ID No</label>
                    <input
                      type="number"
                      id="identity"
                      onChange={(e) => setIdentity(e.target.value)}
                      value={identity}
                      maxLength={9}
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
                  <input
                    type="text"
                    onChange={(e) => setPayeeName(e.target.value)}
                    value={payeename}
                    required
                    id="payee_name"
                    className="input_field"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group-2">
                  <label htmlFor="">Mobile No</label>
                  <input
                    type="number"
                    id="payee_phone"
                    onChange={(e) => setPayeePhone(e.target.value)}
                    value={payeephone}
                    maxLength={10}
                    minLength={10}
                    required
                    placeholder="07XXX"
                    className="input_field"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group-2">
                  <label htmlFor="">Email</label>
                  <input
                    type="mail"
                    id="mail_name"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                    required
                    placeholder="123@abc.com"
                    className="input_field"
                  />
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
          </form>

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
                  <td>{7}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>KES {2888}</td>
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
      <Footer/>
    </div>
  );
}
