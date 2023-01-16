import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../bus.css";


function BusCard({bus, key,image,depature,arrival,seats, price}) {

  return (
    <>
      <div key={key} className=" flex flex-row justify-between shadow-lg container m-auto">
        {/* div holding image */}
        <div className=" flex flex-col justify-evenly  ">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="bus"
            className="object-contain   max-h-32 p-4"
          />
          <h5 className="text-center">{bus}</h5>
        </div>

        {/* div holding pickup time */}

        <div className=" flex flex-col justify-evenly">
          <h5>{depature}</h5>
          <h5 className="text-cyan-500">Pick Up</h5>
        </div>

        {/* div holding drop off time */}
        <div className=" flex flex-col justify-evenly">
          <h5>{arrival}</h5>
          <h5 className="text-cyan-500">Drop off</h5>
        </div>

        {/* div holding number of seatz */}
        <div className=" flex flex-col justify-evenly">
          <h5>{seats}</h5>
          <h5 className="text-cyan-500">Seats left</h5>
        </div>
        {/* div holding price and button */}
        <div className=" flex flex-col justify-evenly">

          <h5>{`${price}`}</h5>
          <button
            className="bg-cyan-400 hover:bg-cyan-600 rounded py-1.5 px-7 "
          >
            Select
          </button>
         
        </div>
      </div>
      {/* drop down */}
      {/* <div
        className="flex p-12 m-0 justify-center"
        ref={pageRef}
        style={{ display: visible ? "flex" : "none" }}
      >
        This is the page content
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="bus"
          className="object-contain   max-h-48 p-4"
        />
      </div> */}
    </>
  );
}

export default BusCard;
