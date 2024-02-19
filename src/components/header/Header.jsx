import React from 'react'
import { SiPexels } from "react-icons/si"
import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className='img'>
        <SiPexels style={{width:"50px",height:"50px"}}/>
      </div>

    </div>
  )
}

export default Header