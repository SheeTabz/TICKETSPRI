import './App.css';
import DashboardTemp from './components/DashboardTemp';
import SaccoLogin from './components/SaccoLogin';
import SaccoSignup from './components/SaccoSignup';
import SaccoLogiPage from './pages/SaccoLogiPage';
import CarListPage from './pages/CarListPage';
import EditForm from './components/EditForm';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(false)

  function handleuser(){
setUser(true);
  }
  return (
   <div>
{/* <SaccoLogin/> */}
{/* <SaccoSignup/> */}
{/* <SaccoLogiPage/> */}
{/* <CarListPage/> */}
{/* <EditForm/> */}
{/* <LandingPage/> */}
<LogInPage click={handleuser} user={user}/>
</div>
  );
}

export default App;
