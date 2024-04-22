import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import City from '../City/City'
import Weather from '../Weather/Weather'

const AllRouts = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<City/>}/>
    <Route path='/weather/:city' element={<Weather/>}/>
   </Routes>
   </>
  )
}

export default AllRouts