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


function App() {
  const [user, setUser] = useState({})
  const [vehicles, setVehicles] = useState([])

  function handleuser(user){
setUser(user);
  }
useEffect(() => {
  fetch("/me")
  .then(res => {
    if(res.ok && Object.keys(user).length > 0 ){
      res.json().then(data => setUser(data))
    }
    else{
      res.json().then(err => console.log(err.errors))
    }
  })
},[])

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
   <div>
    {/* jjj */}
{/* <SaccoLogin/> */}
{/* <SaccoSignup/> */}
{/* <SaccoLogiPage/> */}
{/* <CarListPage/> */}
{/* <EditForm/> */}
<LandingPage handleSearch={handleSearch}/>
{/* <LogInPage handleuser={handleuser} user={user} setUser={setUser}/> */}
</div>
  );
}

export default App;
