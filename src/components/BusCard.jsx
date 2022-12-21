import React, { useState, useRef } from "react";

function BusCard() {



  
  const [visible, setVisible] = useState(false);
  const pageRef = useRef(null);
  const handleClick = () => {
    // Toggle the visibility of the page div
    setVisible(!visible);
  };
  return (
    <>
      <div className=" flex flex-row justify-around bg-zinc-100 mt-6 shadow-2xl m-0 ">
        {/* div holding image */}
        <div className=" flex flex-col justify-evenly  ">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="bus"
            className="object-contain   max-h-48 p-4"
          />
          <h5 className="text-center">b</h5>
        </div>

        {/* div holding pickup time */}

        <div className=" flex flex-col justify-evenly">
          <h5>c</h5>
          <h5>d</h5>
        </div>

        {/* div holding drop off time */}
        <div className=" flex flex-col justify-evenly">
          <h5>e</h5>
          <h5>f</h5>
        </div>

        {/* div holding number of seatz */}
        <div className=" flex flex-col justify-evenly">
          <h5>g</h5>
          <h5>h</h5>
        </div>
        {/* div holding price and button */}
        <div className=" flex flex-col justify-evenly">
          <h5>sh.</h5>
          <button
            onClick={handleClick}
            className="bg-cyan-400 hover:bg-cyan-600 rounded py-1.5 px-7 "
          >
            Select
          </button>
        </div>
      </div>
      <div
        className="fl  m-0"
        ref={pageRef}
        style={{ display: visible ? "block" : "none" }}
      >
        This is the page content
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="bus"
          className="object-contain   max-h-48 p-4"
        />
      </div>
    </>
  );
}

export default BusCard;
