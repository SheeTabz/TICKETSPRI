import { useState } from "react";

import DashboardTemp from "./DashboardTemp";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
function AddCars() {
  const [cars, setCars] = useState("");
  const [desc, setDesc] = useState("");
  const [plate, setPlate] = useState("");
  const [seat, setSeat] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [errors, setErrors] = useState("");
  const [price, setPrice] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const imagesListRef = ref(storage, "images/");

  // handle form submit
  const uploadFile = () => {
    console.log("started")
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };

  const formData = {
    cars,
    desc,
    plate,
    seat,
    pickup,
    drop,
    from,
    to,
    price,
    imageUrls,
  };

  function handleSubmit(e) {
    e.preventDefault();
    uploadFile();
    fetch("/saccos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        // navigate("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    console.log(formData);
  }

  function handlePatch(e) {
    e.preventDefault();
    uploadFile();
    // fetch("/saccos", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((r) => {
    //   if (r.ok) {
    //     navigate("/home");
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  return (
    <>
      <DashboardTemp>
        <div className="flex flex-col  h-screen   ">
          <div className="flex justify-between md:justify-around  border-b-2 border-gray-200 p-1 md:p-5 text-center">
            <h1 className=" text-3xl font-medium">Add Cars</h1>
            <button
              onClick={handlePatch}
              class="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs md:text-xl f py-1 px-2 xl:md:py-2 xl:md:px-6 md:font-bold xl:py-2 xl:px-4 rounded "
            >
              Save
            </button>
          </div>
          <form class="w-full md:p-2 ">
            <div class="flex flex-wrap md:mx-3 md:mb-6 p-2   ">
              <div class="w-full xl:w-1/2 px-3  xl:mb-0 ">
                <label
                  class="block uppercase tracking-wide text-center  text-gray-700 text-xs md:text-sm font-regular xl:mb-2 "
                  for="grid-first-name"
                >
                  Car Name
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 "
                  id="grid-first-name"
                  type="text"
                  placeholder="Scania"
                  onChange={(e) => setCars(e.target.value)}
                />
              </div>
              <div class="w-full xl:w-1/2 px-3 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-last-name"
                >
                  Description
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="color.... height....."
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>

            {/* 2nd row */}
            <div class="flex flex-wrap md:-mx-3 md:mb-7 p-2">
              <div class="w-full  xl:w-1/4 px-3 mb-1  xl:mb-0 ">
                <label
                  class="block uppercase tracking-wide text-center  text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-city"
                >
                  Reg no.
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  placeholder="K*** "
                  onChange={(e) => setPlate(e.target.value)}
                />
              </div>

              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-city"
                >
                  Upload file
                </label>
                <input
                  class=" appearance-none block w-full  text-xs text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
              </div>
              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-zip"
                >
                  Pick-up time
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-zip"
                  type="time"
                  onChange={(e) => setPickup(e.target.value)}
                  onClick={() => uploadFile()}
                />
              </div>
              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-zip"
                >
                  Drop-off time
                </label>
                <input
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-zip"
                  type="time"
                  onChange={(e) => setDrop(e.target.value)}
                />
              </div>
            </div>

            {/* 3rd row */}
            <div class="flex flex-wrap md:-mx-3 md:mb-7 p-2">
              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-city"
                >
                  Route (point 1)
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  placeholder="Naivasha "
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-city"
                >
                  Route (point 2)
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-city"
                  type="text"
                  placeholder="Naivasha "
                  onChange={(e) => setTo(e.target.value)}
                />
              </div>

              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-zip"
                >
                  Price:
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-zip"
                  type="number"
                  placeholder="Sh: 1,020"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class="w-full xl:w-1/4 px-3 mb-1 xl:mb-0">
                <label
                  class="block uppercase tracking-wide text-center text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-state"
                >
                  No. seats
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-white border border-gray-200 text-center text-gray-700 md:py-1 px-2 xl:py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="grid-state"
                    onChange={(e) => setSeat(e.target.value)}
                  >
                    <option></option>
                    <option value={37}>37</option>
                    {/* <option>61</option> */}
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-center text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              class="mb-2 w-full  inline-block px-4 py-2.5 bg-blue-600 text-white font-regular text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add
            </button>
          </form>
        </div>
      </DashboardTemp>
    </>
  );
}

export default AddCars;
