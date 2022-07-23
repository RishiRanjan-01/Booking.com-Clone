import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Hotel from './Hotel'
import HotelPrice from './HotelPrice'
import HotelSeeAvialability from './HotelSeeAvialability'

const AllHotelsRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/allhotels" element={<Hotel/>}></Route>
            <Route path="/allhotels/price" element={<HotelPrice/>}></Route>
            <Route path="/allhotels/price/:id" element={<HotelSeeAvialability/>}></Route>
        </Routes>
    </div>
  )
}

export default AllHotelsRoutes