import './App.css';
import DashboardTemp from './components/DashboardTemp';
import SaccoLogin from './components/SaccoLogin';
import SaccoSignup from './components/SaccoSignup';
import SaccoLogiPage from './pages/SaccoLogiPage';
import CarListPage from './pages/CarListPage';
import EditForm from './components/EditForm';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import BusPage from './pages/BusesPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusPages from './pages/BusesPage';
import DisplaySeats from './components/displaySeat';
// import Payment from "./components/Passengers/Payment";
function App() {
  return (
<BrowserRouter>
    <div className="App">
 <Routes>
  <Route path="/"   element={ <LandingPage/>}  />
 <Route path="/login" element={<LogInPage/>}/>
 <Route path="/saccolog" element={<SaccoLogiPage/>}/>
 <Route path="/bookTicket" element={<BusPages/>}/>
 <Route path="/seats" element={<DisplaySeats/>}/>
 
  {/* <BusPage/> */}
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
