import React, { useState } from 'react'
import { SiPexels } from "react-icons/si"
import { IoIosNotificationsOutline } from "react-icons/io"
import LetterAvatars from '../avatar/LetterAvatar'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { GiHamburgerMenu } from "react-icons/gi"
import BasicButtons from '../button/Button';
import "./style.scss";

import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {

  return (
    <div className='absolute z-10 w-full'>
        <div className='flex justify-between ml-4 mt-2 mr-4  '>
          <div className='img flex justify-between items-center '>
            <SiPexels style={{width:"50px",height:"50px"}} className='hover:cursor-pointer'/>
            <p className='hidden md:block md:text-2xl md:hover:cursor-pointer md:font-extrabold md:ml-4 '>PIXELS</p>
          </div>
          <div className='flex justify-evenly gap-x-6 items-center'>
            <p className='hidden md:block md:text-lg md:hover:cursor-pointer md:font-bold'>Explore</p>
            <p className='hidden md:block md:text-lg md:hover:cursor-pointer md:font-bold'>License</p>
            <IoIosNotificationsOutline style={{width:"30px",height:"30px"}} className='hover:cursor-pointer'/>
            <LetterAvatars sx={{'&:hover': {
              cursor: 'pointer',
            }}}/>
            <BasicButtons/>
            <GiHamburgerMenu className='block md:hidden'/>


          </div>

        </div>
      </div>
   
  )
}

export default Header