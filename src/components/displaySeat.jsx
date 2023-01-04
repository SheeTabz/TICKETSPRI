import { waitForElementToBeRemoved } from "@testing-library/react";
import { useState, useEffect } from "react";
import "./displayseat.css";
function DisplaySeats() {
  const [isSelected, setIsSelected] = useState(false);

  const [users, setUsers] = useState([]);
  const [waited, setWaited] = useState([]);
  const [changed, setChanged] = useState(0);
  const [values, setValues] = useState([]);
  const handleClick = (event) => {
    const value = [event.target.value];
    //console.log(value);
    //setValues([...value, values]);
  };
  
  //console.log(values);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [changed]);
  async function usedData() {
    const user = await users;
    setWaited(user.map((item) => item.id));
  }
  usedData();

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
              <div
                className="seat"
                style={{ backgroundColor: isSelected ? "aqua" : "white" }}
              >
                1A
              </div>
              <div
                className="seat"
                style={{ backgroundColor: isSelected ? "aqua" : "white" }}
              >
                1B
              </div>
              <div className="seat">3A</div>
              <div className="seat">3A</div>
              <div className="seat">5A</div>
              <div className="seat">5B</div>
              <div className="seat">7A</div>
              <div className="seat">7B</div>
              <div className="seat">9A</div>
              <div className="seat">9B</div>
              <div className="seat">11A</div>
              <div className="seat">11B</div>
              <div className="seat">13A</div>
              <div className="seat">13B</div>
              <div className="seat">15A</div>
              <div className="seat">15B</div>
            </div>
            <div className="right row grid grid-cols-2 gap-2 ">
              <div className="seat">2A</div>
              <div className="seat">2B</div>
              <div className="seat">4A</div>
              <div className="seat">4B</div>
              <div className="seat">6A</div>
              <div className="seat">6B</div>
              <div className="seat">8A</div>
              <div className="seat">8B</div>
              <div className="seat">10A</div>
              <div className="seat">10B</div>
              <div className="seat">12A</div>
              <div className="seat">12B</div>
              <div className="seat">14A</div>
              <div className="seat">14B</div>
              <div className="seat">16A</div>
              <div className="seat">16B</div>
            </div>
          </div>
          <div className="backRow flex justify-between mt-2">
            <div className="seat">17A</div>
            <div className="seat">17B</div>
            <div className="seat">17C</div>
            <div className="seat">17D</div>
            <div className="seat">17E</div>
          </div>
        </div>
        <div className="after">
          <div
            className="test1"
            //onClick={getId}
            //   onClick={() => getArrId()}
            onClick={handleClick}
          >
            <input
              //readOnly={true}
              disabled
              className="input"
              onClick={handleClick}
              type="text"
              id="1"
              value={waited[0]}
            />
          </div>
          <div
            className="test2"
            //onClick={() => getArrId()}
            onClick={handleClick} //onClick={getId}
          >
            <input
              //readOnly={true}
              disabled
              className="input"
              onClick={handleClick}
              type="text"
              id="1"
              value={waited[1]}
            />
          </div>
        </div>

        {values.map((item, i) => (
          <h2 key={i}>{item}</h2>
        ))}
      </div>
    </>
  );
}

export default DisplaySeats;
