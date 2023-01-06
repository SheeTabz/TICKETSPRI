import React from "react";
// import { useHistory } from "react-router-dom";
import { FaUser, FaEnvelope, FaMap } from "react-icons/fa";

function Profile({ user }) {
  return (
    <div className="container">
      <h3 className="text-center text-primary">My Profile</h3>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-md-8 mt-2">
          <div className="card" style={{ borderBadius: "15px" }}>
            <div className="card-body">
              <div className="d-flex text-black">
                <div className="flex-grow-1  ">
                  <h5 className="mb-1 text-primary">
                    <FaUser /> {user.name}{" "}
                  </h5>
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef" }}
                  ></div>
                  <div className="d-flex">
                    <p className="small ">
                      {" "}
                      <strong>Role</strong> <span>Sacco</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="small ">
                      {" "}
                      <strong>Username</strong> <span>{user.username}</span>{" "}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="small ">
                      {" "}
                      <strong>Email</strong> <span>{user.email}</span>{" "}
                    </p>
                  </div>
                  {/* <div className="d-flex ">
                    <p className="small">
                      {" "}
                      <strong>Trainer:</strong> <span> </span>{" "}
                    </p>
                  </div> */}
                  {/* <div className="alert alert-info rounded-0">
                    You have not booked a trainer .Please book a trainer to have
                    exclusive access to all trainer lessons.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
