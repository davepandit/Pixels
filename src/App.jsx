import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        PIXELS
      </div>
    </>
  )
}

export default App
