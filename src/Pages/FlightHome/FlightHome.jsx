import React from 'react'
import FlightHomeTop from './FlightHomeTop'
import Popularflight from './PopularFlight/Popularflight'

import Transparency from './Transparency/Transparency'
import Flywordwide from './Flywordwide/Flywordwide'
import TrendingCities from './TrendingCities/TrendingCities'
import Frequestlyquestion from './Frequestlyquestion/Frequestlyquestion'
import Navbar from '../../Components/Navbar'
import { FlightFooter } from '../../Components/FlightFooter/FlightFooter'


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
         <FlightFooter/>

    </div>
  )
}

export default FlightHome