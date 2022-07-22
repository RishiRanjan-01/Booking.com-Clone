import React from 'react'
import FlightHomeTop from './FlightHomeTop'
import Popularflight from './PopularFlight/Popularflight'

import Transparency from './Transparency/Transparency'
import Flywordwide from './Flywordwide/Flywordwide'
import TrendingCities from './TrendingCities/TrendingCities'
import Frequestlyquestion from './Frequestlyquestion/Frequestlyquestion'
import Navbar from '../../Components/Navbar'


const FlightHome = () => {
  return (
    <div>
      <Navbar/>
        <FlightHomeTop/>
         <Popularflight/>

         <TrendingCities/>
         <Transparency/>
         <Flywordwide/>
         <Frequestlyquestion/>

    </div>
  )
}

export default FlightHome