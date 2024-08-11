import React from 'react'
import ToggleSwitch from '../reuseable/ToggleSwitch'

const Header = (changeMode) => {
  return (
    <div>
        <div className=" d-flex justify-content-between" style={{flexWrap:"wrap"}}>
            <div className="">
            <h3 className='bold primaryblue m-0' id='title'>Social Media Dashboard</h3>
            <p className='xs bold small secondaryblue m-0'>Total Followers: 23,004</p>
            </div>
            <div>
              <hr className='divider'/>
          <div className="darkModeBox">
             <div><span className='bold small secondaryblue'> Dark Mode</span></div>
            <div> <ToggleSwitch /></div>
          </div>
            
            </div>
        </div>
    </div>
  )
}

export default Header