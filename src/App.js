import "./App.css";
import DashboardTemp from "./components/DashboardTemp";
import SaccoLogin from "./components/SaccoLogin";
import SaccoSignup from "./components/SaccoSignup";
import SaccoLogiPage from "./pages/SaccoLogiPage";
import CarListPage from "./pages/CarListPage";
import EditForm from "./components/EditForm";
import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
import BusPage from "./pages/BusesPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Account from './components/Passengers/Account';
import ResponsivePage from './components/Passengers/Confirmation';
// import { PDFDownloadLink } from "@react-pdf/renderer";

// import PDFFile from "./components/Passengers/PDFFile";

// import Confirmation from "./components/Passengers/Confirmation";

// import Account from "./components/Passengers/Account";
function App() {
  return (


    <div className="App">
  {/* <NavBar1/> */}
  {/* <NavBar2/> */}
  {/* <LandingPage/> */}
  {/* <LogInPage/> */}
  {/* <BusPage/> */}
  {/* <Account/> */}
  <ResponsivePage/>
    </div>


  );
}

export default App;
