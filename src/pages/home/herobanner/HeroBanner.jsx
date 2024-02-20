import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import fetchDataFromAPI from '../../../utils/api'


const HeroBanner = () =>{
    const [backgroundImage,setBackgroundImage]=useState("")
    const [photographer,setPhotographer]=useState("")
    useEffect(()=>{
        getBackgroundImage()
    },[])


    const getBackgroundImage = () =>{
        fetchDataFromAPI("ocean")
        .then((res)=>{
            setBackgroundImage(res.photos[0].src.landscape)
            setPhotographer(res.photos[0].photographer)

        })
        .catch((error)=>{
            console.log("Background image cannot be loaded")
        })
    }
    return(
        <>
            <div className='absolute top-0 w-full'>
                <img src={backgroundImage} alt="bg image" className='w-full relative ' />
                <p className='absolute right-5  bottom-7 text-black opacity-75'>Photo by {photographer}</p>
                <div className=' flex justify-center'>
                    <p className='absolute inset-y-1/2  text-3xl font-extrabold text-white'>The best free stock photos, royalty free <br />
                    images & videos shared by creators.</p>

                </div>
                            
            </div>

        
        
        </>
    )

}
export default HeroBanner