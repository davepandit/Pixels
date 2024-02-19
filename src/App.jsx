import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import Home from './pages/home/Home';
import Error from './pages/error/Error';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import Videos from './pages/videos/Videos';



function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const  {url} = useSelector((state) => state.home);
  console.log(url);

  useEffect(()=>{
    fetchApiConfig();
  },[])

  const fetchApiConfig = ()=>{
      fetchDataFromApi("/search/Nature")
        .then((result)=>{
          console.log("here goes the result")
          console.log(result)
        })
        .catch((error)=>{
          console.log(error)
        })

  }
  

  return (
    <>
      <div>
        PIXELS
      </div>
    </>
  )
}

export default App
