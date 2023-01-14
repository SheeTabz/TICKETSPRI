import BusCard from "../components/BusCard";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";

function BusPages() {
  return (
    <>
      <NavBar2 />
      <div className="space-y-24">
        <BusCard />
        <BusCard />
      </div>
      <Footer />
    </>
  );
}

export default BusPages;
