import { useState, useEffect } from "react";
import BusCard from "../components/BusCard";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";


function BusPages({user, setUser}) {
    const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("vehicles")
      .then((response) => response.json())
      .then((data) => setBuses(data));
  }, []);
  console.log(buses);
  return (
    <>
      <NavBar2 user={user} setUser={setUser}/>
      <div className="space-y-8">
         {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus.vehicle_name} image={bus.image} depature={bus.departure_time} arrival={bus.arrival_time} seats={bus.no_of_seats} price={bus.route.Price} ></BusCard>
        ))}

      </div>
      <Footer />
    </>
  );
}

export default BusPages;
