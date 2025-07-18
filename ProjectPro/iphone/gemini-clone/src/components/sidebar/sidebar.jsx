import React from 'react'
import {assets} from '../../assets/assets'
import './sidebar.css'
const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default sidebar
