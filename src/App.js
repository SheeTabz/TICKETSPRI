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

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusPages from './pages/BusesPage';
import DisplaySeats from './components/displaySeat';
import ResponsivePage from './components/Passengers/Confirmation';
import Services from './components/Passengers/Passenger';
import Account from './components/Passengers/Account';
import AddCars from './components/AddCars';
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
 <Route path="/confirmation" element={<ResponsivePage/>}/>
 <Route path="/passengerDetails" element={<Services/>}/>
 <Route path="/saccoAccount" element={<Account/>}/>
 <Route path="/saccoBuses" element={<CarListPage/>}/>
 <Route path="/saccoNew" element={<AddCars/>}/>
 
 
 
 
  {/* <BusPage/> */}
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
