import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import fetchDataFromAPI from "./utils/api"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import LeaderBoard from './pages/leaderboard/LeaderBoard';
import Videos from './pages/videos/Videos';
import SearchResults from './pages/searchResults/SearchResults';
import HeroBanner from './pages/home/herobanner/HeroBanner';


function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const  {url} = useSelector((state) => state.home);
  console.log(url);

  useEffect(()=>{
    fetchAPIConfig()
  },[])

  const fetchAPIConfig = () =>{
    fetchDataFromAPI('Nature')
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
      <BrowserRouter>
      <div className='relative '>
        <Header />
        <HeroBanner/>
      </div>   
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    
    </BrowserRouter>
    </>
  )
}

export default App
