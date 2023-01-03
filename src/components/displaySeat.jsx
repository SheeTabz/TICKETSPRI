import { useState, useEffect } from "react";
import "./displayseat.css";
function DisplaySeats() {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  // console.log(users);
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
                onClick={handleClick}
              >
                1A
              </div>
              <div
                className="seat"
                style={{ backgroundColor: isSelected ? "aqua" : "white" }}
                onClick={handleClick}
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
        <div className="after"></div>
      </div>
      <div>
        {/* {users ? (
          <div>
            <div id="item-1" key={users[0].id}>
              {users[0].title}
            </div>
            <div id="item-2" key={users[1].id}>
              {users[1].title}
            </div>
            <div id="item-3" key={users[2].id}>
              {users[2].title}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )} */}
      </div>
    </>
  );
}

export default DisplaySeats;
