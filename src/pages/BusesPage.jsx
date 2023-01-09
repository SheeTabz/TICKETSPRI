import BusCard from "../components/BusCard";
import NavBar2 from "../components/NavBar2";

function BusPages() {
  return (
    <>
      <NavBar2 />
      <div className="space-y-8">
      <BusCard />
      <BusCard />
      </div>
    </>
  );
}

export default BusPages;
