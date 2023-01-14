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

  console.log(user)
  return (
   <div>
{/* <SaccoLogin/> */}
{/* <SaccoSignup/> */}
{/* <SaccoLogiPage/> */}
{/* <CarListPage/> */}
{/* <EditForm/> */}
{/* <LandingPage/> */}
<LogInPage handleuser={handleuser} user={user} setUser={setUser}/>
</div>
  );
}

export default App;
