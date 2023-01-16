import './App.css';
import DashboardTemp from './components/DashboardTemp';
import SaccoLogin from './components/SaccoLogin';
import SaccoSignup from './components/SaccoSignup';
import SaccoLogiPage from './pages/SaccoLogiPage';
import CarListPage from './pages/CarListPage';
import EditForm from './components/EditForm';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';

import { useEffect, useState } from 'react';

import BusPage from './pages/BusesPage';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BusPages from './pages/BusesPage';
import DisplaySeats from './components/displaySeat';
import ResponsivePage from './components/Passengers/Confirmation';
import Services from './components/Passengers/Passenger';
import Account from './components/Passengers/Account';
import AddCars from './components/AddCars';
import UserAccount from './pages/UserAccount';


function App() {
  const [user, setUser] = useState({})
  const [vehicles, setVehicles] = useState([])
  const [initials, setInitials] = useState("");
  async function handleuser(user){
      await setUser(user);
  }
useEffect(() => {
   fetch("/customer/me")
  .then(res => {
    if(res.ok){
      res.json().then(data => {
        setUser(data)
        console.log(data);
        const words = data.name.split(" ");
        const firstName = words[0];
        const lastName = words[1];
        console.log(setInitials(getInitials(firstName, lastName)));
      })
    }
    else{
      res.json().then(err => console.log(err.errors))
    }
  })
  

},[])

 function getInitials(firstName, lastName) {
  const initials = firstName.substring(0, 1) + lastName.substring(0, 1);
  return initials;
}
console.log(initials)
console.log(user)
function handleSearch(loc){
  fetch("/vehicles")
  .then(res =>{
    if(res.ok){
      res.json()
      .then(data => {
       data.find(car => car.route_id === Number(loc) ? setVehicles([...vehicles, car]) : alert('Sorry, no available vehicles for that route at the moment'));
     
      })
    }
    else{
      res.json().then(err => console.log(err.error))
    }
  })
}
  console.log(vehicles)

  return (
<BrowserRouter>
    <div className="App">
 <Routes>
  <Route path="/"   element={ <LandingPage user={user} setUser={setUser} handleSearch={handleSearch} initials={initials}/>}  />
 <Route path="/login" element={<LogInPage handleuser={handleuser} user={user} setUser={setUser} initials={initials}/>}/>
 <Route path="/saccolog" element={<SaccoLogiPage/>}/>
 <Route path="/bookTicket" element={<BusPages user={user} setUser={setUser} initials={initials}/>}/>
 <Route path="/seats" element={<DisplaySeats/>}/>
 <Route path="/confirmation" element={<ResponsivePage/>}/>
 <Route path="/passengerDetails" element={<Services/>}/>
 <Route path="/saccoAccount" element={<Account/>}/>
 <Route path="/saccoBuses" element={<CarListPage/>}/>
 <Route path="/saccoNew" element={<AddCars/>}/>
 <Route path="/account" element={<UserAccount user={user} setUser={setUser} initials={initials}/>}/>
 

 
 

  </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
