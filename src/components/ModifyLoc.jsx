import React, { useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";

function ModifyLoc({ handleSearch }) {
  const [formData, setFormData] = useState({
    route: "",
    departure: "",
    arrival: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(formData.route);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // console.log(formData);
  return (
    <div className=" flex flex-col mt-0.5 w-full h-full items-center mb-2  ">
      <form
        className="flex p-1 w-full bg-blue-100 border border-sky-500  items-center justify-around "
        onSubmit={handleSubmit}
      >
        <div className="bg-white rounded">
          <div className="flex md:w-full  w-fit md:space-x-5 space-x-2 items-center justify-around">
            <label>From </label>
            <VscArrowSwap />
            <label>To</label>
          </div>
          <select
            class="mx-4"
            aria-label=".form-select-lg example"
            name="route"
            onChange={handleChange}
          >
            <option selected className="text-sm ">
              Select route:{" "}
            </option>
            <option value="1">Nairobi - Mombasa</option>
            <option value="2">Kisumu - Nakuru</option>
            <option value="3">Nairobi - Kisumu</option>
            <option value="4">Eldoret - Isiolo</option>
          </select>
        </div>
        <div className=" bg-white p-2 rounded justify-between w-1/10  xs:w-1/4 h-auto">
          <label className=" mx-4 ">Depart</label>
          <input
            className="h-auto text-sm md:xl:text-regular "
            type="date"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
          />
        </div>
        <div className="bg-white p-2 rounded justify-between w-1/10  xs:w-1/4 h-auto">
          <label className="mx-4">Return</label>
          <input
            type="date"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            className="h-auto text-sm md:xl:text-regular"
          />
        </div>
        <button type="submit " className="h-full buton">
          Modify
        </button>
      </form>
    </div>
  );
}

export default ModifyLoc;
