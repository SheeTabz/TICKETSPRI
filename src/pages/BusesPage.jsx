import { useState, useEffect } from "react";
import BusCard from "../components/BusCard";
import Footer from "../components/Footer";
import ModifyLoc from "../components/ModifyLoc";
import NavBar2 from "../components/NavBar2";

function BusPages({
  user,
  setUser,
  initials,
  handleSearch,
  vehicles,
  setVehicles,
}) {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("vehicles")
      .then((response) => response.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <>
      <NavBar2 user={user} setUser={setUser} initials={initials} />
      <ModifyLoc handleSearch={handleSearch} />
      <div className="space-y-8">
        {vehicles.map((bus) => (
          <BusCard
            key={bus.id}
            bus={bus.vehicle_name}
            image={bus.image}
            depature={bus.departure_time}
            arrival={bus.arrival_time}
            seats={bus.no_of_seats}
            price={bus.route.Price}
          ></BusCard>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default BusPages;
