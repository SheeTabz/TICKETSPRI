import BusCard from "../components/BusCard";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";

function BusPages({user, setUser}) {
  return (
    <>
      <NavBar2 user={user} setUser={setUser}/>
      <div className="space-y-24">
        <BusCard />
        <BusCard />
      </div>
      <Footer />
    </>
  );
}

export default BusPages;
