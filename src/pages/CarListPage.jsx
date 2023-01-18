import React, { useEffect,useState } from 'react'
import CarLists from '../components/CarLists'
import DashboardTemp from '../components/DashboardTemp'

function CarListPage({sacco,setSacco}) {
  const [saccoBus, setSaccoBus] = useState()
  const [saccoId,setId]=useState('')
  async function load(){
    let data=await sacco.id
    if (data) {
      setId(data)
    }
  }
  load()
useEffect(()=>{
  fetch(`/saccos/${saccoId}`)
  .then(res => res.json())
  .then(data => setSaccoBus(data.vehicles))
},[saccoId])
console.log(saccoBus)
  return (
    // saccoId ?(
   <div>
    <DashboardTemp sacco={sacco} setSacco={setSacco}>
    <CarLists saccoBus={saccoBus}/>
   </DashboardTemp>
   </div>)
  //  :
  //  (<div>Loading.....</div>)
  // )
}

export default CarListPage