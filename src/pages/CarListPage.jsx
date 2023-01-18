import React from 'react'
import CarLists from '../components/CarLists'
import DashboardTemp from '../components/DashboardTemp'

function CarListPage({sacco,setSacco}) {
  return (
   <DashboardTemp sacco={sacco} setSacco={setSacco}>
    <CarLists/>
   </DashboardTemp>
  )
}

export default CarListPage