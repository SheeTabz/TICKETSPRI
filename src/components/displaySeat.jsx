import { waitForElementToBeRemoved } from "@testing-library/react";
import { useState, useEffect } from "react";
import "./displayseat.css";
function DisplaySeats() {
  // ++++++++++-------------constants--------------++++++++++++=
  const [users, setUsers] = useState([]);
  const [waited, setWaited] = useState([]);
  const [price, setPrice] = useState([]);
  const [changed, setChanged] = useState(0);
  const [checked, setChecked] = useState(false);
  const [boolean, setBoolean] = useState(false);
  const [items, setItems] = useState([]);
  //********-----------functions-----------****************
  function deleteItem(id) {
    // fetch(`/seats/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     selected: false,
    //   }),
    // }).then(
    fetch(`/selectedseats/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setItems(items.filter((item) => item.id !== id));
        } else {
          // handle errors
          console.log("Error Occured");
        }
      })
      .then(() => fetchMapped());
    //);
  }

  function fetchMapped() {
    fetch("/selectedseats")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }
  // <<<<------------------fecth request----------------->>>>>>>>>
  useEffect(() => {
    fetch("/seats")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    fetchMapped();
  }, [
    changed,
    // items
  ]);

  async function usedData() {
    const user = await users;
    setWaited(user.map((item) => item.id));
    setPrice(user.map((item) => item.name));
    setBoolean(user.map((item) => item.selected));
  }
  if (boolean === true) {
    setChecked(true);
  }

  usedData();

  const handleClick = (index) => {
    fetch(`/seats/${index + 1}`)
      .then((response) => response.json())
      .then((data) => {
//        let send = { seat_no: data.seat_no, status: data.status };
        //console.log(send);
        fetch("/selectedseats", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then(() => fetchMapped());
      });
  };

  return (
    <>
      {/* parent div */}
      <div className="information flex items-center	w-1/5	p-2 bg-gray-100  text-sm">
        <p className="text-sm md:text-base">
          Select a seat by taping on the grey seat buttons. You may select as
          many seats as you{" "}
        </p>
      </div>
      <div className="contain flex justify-evenly p-2">
        <div className="parent flex-col   ">
          <div className="driverDoor flex space-x-28 mb-2  ">
            <div className="door bg-blue-100 border rounded p-1 ">
              <p className="text-xs">Door</p>
            </div>
            <div className="door bg-red-400 border rounded p-1 px-2 ">
              <p className="text-xs">Driver</p>
            </div>
          </div>
          <div className="rows flex space-x-16  ">
            <div className="left row grid grid-cols-2 gap-2">
              {/* ------ seat ------- */}
              <div
                className="seat"
                style={{ backgroundColor: boolean[0] ? "red" : "white" }}
                onClick={() => handleClick(0)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="1"
                  disabled={boolean[0]}
                />
                <label for="1">{waited[0]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[1] ? "red" : "white" }}
                onClick={() => handleClick(1)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="2"
                  disabled={boolean[1]}
                />
                <label for="2">{waited[1]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[4] ? "red" : "white" }}
                onClick={() => handleClick(4)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="5"
                  disabled={boolean[4]}
                />
                <label for="5">{waited[4]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[5] ? "red" : "white" }}
                onClick={() => handleClick(5)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="6"
                  disabled={boolean[5]}
                />
                <label for="6">{waited[5]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[8] ? "red" : "white" }}
                onClick={() => handleClick(8)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="9"
                  disabled={boolean[8]}
                />
                <label for="9">{waited[8]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[9] ? "red" : "white" }}
                onClick={() => handleClick(9)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="10"
                  disabled={boolean[9]}
                />
                <label for="10">{waited[9]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[12] ? "red" : "white" }}
                onClick={() => handleClick(12)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="13"
                  disabled={boolean[12]}
                />
                <label for="13">{waited[12]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[13] ? "red" : "white" }}
                onClick={() => handleClick(13)}
              >
                <input type="checkbox" className="hidden" id="14" />
                <label for="14">{waited[13]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[16] ? "red" : "white" }}
                onClick={() => handleClick(16)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="17"
                  disabled={boolean[16]}
                />
                <label for="17">{waited[16]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[17] ? "red" : "white" }}
                onClick={() => handleClick(17)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="18"
                  disabled={boolean[17]}
                />
                <label for="18">{waited[17]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[20] ? "red" : "white" }}
                onClick={() => handleClick(20)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="21"
                  disabled={boolean[20]}
                />
                <label for="21">{waited[20]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[21] ? "red" : "white" }}
                onClick={() => handleClick(21)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="22"
                  disabled={boolean[21]}
                />
                <label for="22">{waited[21]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[24] ? "red" : "white" }}
                onClick={() => handleClick(24)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="25"
                  disabled={boolean[24]}
                />
                <label for="25">{waited[24]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[25] ? "red" : "white" }}
                onClick={() => handleClick(25)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="26"
                  disabled={boolean[25]}
                />
                <label for="26">{waited[25]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[28] ? "red" : "white" }}
                onClick={() => handleClick(28)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="29"
                  disabled={boolean[28]}
                />
                <label for="29">{waited[28]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[29] ? "red" : "white" }}
                onClick={() => handleClick(29)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="30"
                  disabled={boolean[29]}
                />
                <label for="30">{waited[29]}</label>
              </div>
            </div>

            {/* //////RIGHT ROW */}
            <div className="right row grid grid-cols-2 gap-2 ">
              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[2] ? "red" : "white" }}
                onClick={() => handleClick(2)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="3"
                  disabled={boolean[2]}
                />
                <label for="3">{waited[2]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[3] ? "red" : "white" }}
                onClick={() => handleClick(3)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="4"
                  disabled={boolean[3]}
                />
                <label for="4">{waited[3]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[6] ? "red" : "white" }}
                onClick={() => handleClick(6)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="7"
                  disabled={boolean[6]}
                />
                <label for="7">{waited[6]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[7] ? "red" : "white" }}
                onClick={() => handleClick(7)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="8"
                  disabled={boolean[7]}
                />
                <label for="8">{waited[7]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[10] ? "red" : "white" }}
                onClick={() => handleClick(10)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="11"
                  disabled={boolean[10]}
                />
                <label for="11">{waited[10]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[11] ? "red" : "white" }}
                onClick={() => handleClick(11)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="12"
                  disabled={boolean[11]}
                />
                <label for="12">{waited[11]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[14] ? "red" : "white" }}
                onClick={() => handleClick(14)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="15"
                  disabled={boolean[14]}
                />
                <label for="15">{waited[14]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[15] ? "red" : "white" }}
                onClick={() => handleClick(15)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="16"
                  disabled={boolean[15]}
                />
                <label for="16">{waited[15]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[18] ? "red" : "white" }}
                onClick={() => handleClick(18)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="19"
                  disabled={boolean[18]}
                />
                <label for="19">{waited[18]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[19] ? "red" : "white" }}
                onClick={() => handleClick(19)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="20"
                  disabled={boolean[19]}
                />
                <label for="20">{waited[19]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[22] ? "red" : "white" }}
                onClick={() => handleClick(22)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="23"
                  disabled={boolean[22]}
                />
                <label for="23">{waited[22]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[23] ? "red" : "white" }}
                onClick={() => handleClick(23)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="24"
                  disabled={boolean[23]}
                />
                <label for="24">{waited[23]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[26] ? "red" : "white" }}
                onClick={() => handleClick(26)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="27"
                  disabled={boolean[26]}
                />
                <label for="27">{waited[26]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[27] ? "red" : "white" }}
                onClick={() => handleClick(27)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="28"
                  disabled={boolean[27]}
                />
                <label for="28">{waited[27]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[30] ? "red" : "white" }}
                onClick={() => handleClick(30)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="31"
                  disabled={boolean[30]}
                />
                <label for="31">{waited[30]}</label>
              </div>

              {/* ------- seat ------- */}

              <div
                className="seat"
                style={{ backgroundColor: boolean[31] ? "red" : "white" }}
                onClick={() => handleClick(31)}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  id="32"
                  disabled={boolean[31]}
                />
                <label for="32">{waited[31]}</label>
              </div>
            </div>
          </div>
          <div className="backRow flex justify-between mt-2">
            {/* ------- seat ------- */}

            <div
              className="seat"
              style={{ backgroundColor: boolean[32] ? "red" : "white" }}
              onClick={() => handleClick(32)}
            >
              <input
                type="checkbox"
                className="hidden"
                id="33"
                disabled={boolean[32]}
              />
              <label for="33">{waited[32]}</label>
            </div>

            {/* ------- seat ------- */}

            <div
              className="seat"
              style={{ backgroundColor: boolean[33] ? "red" : "white" }}
              onClick={() => handleClick(33)}
            >
              <input
                type="checkbox"
                className="hidden"
                id="34"
                disabled={boolean[33]}
              />
              <label for="34">{waited[33]}</label>
            </div>

            {/* ------- seat ------- */}

            <div
              className="seat"
              style={{ backgroundColor: boolean[34] ? "red" : "white" }}
              onClick={() => handleClick(34)}
            >
              <input
                type="checkbox"
                className="hidden"
                id="35"
                disabled={boolean[34]}
              />
              <label for="35">{waited[34]}</label>
            </div>

            {/* ------- seat ------- */}

            <div
              className="seat"
              style={{ backgroundColor: boolean[35] ? "red" : "white" }}
              onClick={() => handleClick(35)}
            >
              <input
                type="checkbox"
                className="hidden"
                id="36"
                disabled={boolean[35]}
              />
              <label for="36">{waited[35]}</label>
            </div>

            {/* ------- seat ------- */}

            <div
              className="seat"
              style={{ backgroundColor: boolean[36] ? "red" : "white" }}
              onClick={() => handleClick(36)}
            >
              <input
                type="checkbox"
                className="hidden"
                id="37"
                disabled={boolean[36]}
              />
              <label for="37">{waited[36]}</label>
            </div>
          </div>
        </div>

        <div className="after border-solid border-2 border-sky-100">
          <table class="min-w-full ">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Seat
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Fare
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  key={item.id}
                >
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.seat_no}
                  </td>
                  <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    {`${item.name}00`}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                    <button
                      className="inline-block px-3 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight  rounded hover:bg-black hover:bg-opacity-5  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      onClick={() => deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Proceed to Booking
          </button>

          {/* <div className="test1" onClick={() => handleClick(0)}>
            <input disabled className="input" type="text" value={waited[0]} />
            {price[0]}
          </div>
          <div className="test2" onClick={() => handleClick(1)}>
            <input disabled className="input" type="text" value={waited[1]} />
            {price[1]}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DisplaySeats;
