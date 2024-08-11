import React, {useState} from 'react'
import Header from '../components/Dashboard/Header'
import FollowerSection from '../components/Dashboard/FollowerSection'
import Overview from '../components/Dashboard/Overview'

const DashboardPage = () => {



  return (
    <div>
      <Header />  
      <FollowerSection/>
      <Overview/>
      
    </div>
  )
}

export default DashboardPage