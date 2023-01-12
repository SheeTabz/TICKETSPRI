import { waitForElementToBeRemoved } from "@testing-library/react";
import { useState, useEffect } from "react";
import "./displayseat.css";
function DisplaySeats() {
  // ++++++++++-------------constants--------------++++++++++++=
  const [users, setUsers] = useState([]);
  const [waited, setWaited] = useState([]);
  const [price, setPrice] = useState([]);
  const [changed, setChanged] = useState(0);
  const [color, setColor] = useState("white");

  const [selected, setSelected] = useState(null);

  //********-----------functions-----------****************
  // const handleClick = (inputName) => {
  //   setValues((prevValues) => [...prevValues, INPUT_VALUES[inputName]]);
  // };

  //console.log(values.length);
  //console.clear;
  // <<<<------------------fecth request----------------->>>>>>>>>
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [changed]);
  async function usedData() {
    const user = await users;
    setWaited(user.map((item) => item.id));
    setPrice(user.map((item) => item.title));
  }
  usedData();

  const handleClick = (index) => {
    // setColor(color === "green" ? "white" : "white");
    console.log(index);
    // setSelected(index);
    // value = setValue(e.target.value);
    //console.log(value);
    //   fetch("/api/endpoint", {
    //   method: "POST",
    //   body: JSON.stringify({ data: value }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // do something with the response data
    //     console.log(data);
    //    setValue("");

    //   });
  };

  return (
    <>
      {/* parent div */}
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
              <div className="seat">
                <input type="checkbox" className="hidden" id="1" />
                <label for="1">{waited[0]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="2" />
                <label for="2">{waited[1]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="5" />
                <label for="5">{waited[4]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="6" />
                <label for="6">{waited[5]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="9" />
                <label for="9">{waited[8]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="10" />
                <label for="10">{waited[9]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="13" />
                <label for="13">{waited[12]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="14" />
                <label for="14">{waited[13]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="17" />
                <label for="17">{waited[16]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="18" />
                <label for="18">{waited[17]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="21" />
                <label for="21">{waited[20]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="22" />
                <label for="22">{waited[21]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="25" />
                <label for="25">{waited[24]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="26" />
                <label for="26">{waited[25]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="29" />
                <label for="29">{waited[28]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="30" />
                <label for="30">{waited[29]}</label>
              </div>
            </div>

            {/* //////RIGHT ROW */}
            <div className="right row grid grid-cols-2 gap-2 ">
              <div className="seat">
                <input type="checkbox" className="hidden" id="3" />
                <label for="3">{waited[2]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="4" />
                <label for="4">{waited[3]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="7" />
                <label for="7">{waited[6]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="8" />
                <label for="8">{waited[7]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="11" />
                <label for="11">{waited[10]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="12" />
                <label for="12">{waited[11]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="15" />
                <label for="15">{waited[14]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="16" />
                <label for="16">{waited[15]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="19" />
                <label for="19">{waited[18]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="20" />
                <label for="20">{waited[19]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="23" />
                <label for="23">{waited[22]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="24" />
                <label for="24">{waited[23]}</label>
              </div>

              <div className="seat">
                <input type="checkbox" className="hidden" id="27" />
                <label for="27">{waited[26]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="28" />
                <label for="28">{waited[27]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="31" />
                <label for="31">{waited[30]}</label>
              </div>
              <div className="seat">
                <input type="checkbox" className="hidden" id="32" />
                <label for="32">{waited[31]}</label>
              </div>
            </div>
          </div>
          <div className="backRow flex justify-between mt-2">
            <div className="seat">
              <input type="checkbox" className="hidden" id="33" />
              <label for="33">{waited[32]}</label>
            </div>
            <div className="seat">
              <input type="checkbox" className="hidden" id="34" />
              <label for="34">{waited[33]}</label>
            </div>
            <div className="seat">
              <input type="checkbox" className="hidden" id="35" />
              <label for="35">{waited[34]}</label>
            </div>
            <div className="seat">
              <input type="checkbox" className="hidden" id="36" />
              <label for="36">{waited[35]}</label>
            </div>
            <div className="seat">
              <input type="checkbox" className="hidden" id="37" />
              <label for="37">{waited[36]}</label>
            </div>
          </div>
        </div>

        <div className="after">
          <div
            className="test1"
            onClick={() => handleClick(0)}
            style={{ backgroundColor: selected === 0 ? "red" : "white" }}
          >
            <input disabled className="input" type="text" value={waited[0]} />
            {price[0]}
          </div>
          <div
            className="test2"
            onClick={() => handleClick(1)}
            style={{ backgroundColor: selected === 0 ? "red" : "white" }}
          >
            <input disabled className="input" type="text" value={waited[1]} />
            {price[1]}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplaySeats;
