import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hotel from './All_Hotel/Hotel'
import HotelPrice from './All_Hotel/HotelPrice'
import HotelSeeAvialability from './All_Hotel/HotelSeeAvialability'
import HomePage from './Home/HomePage'
import HotelCheckout from './HotelCheckout/HotelCheckout'
import HotelPaymentPage from './HotelCheckout/HotelPaymentPage'
import FlightHome from "./FlightHome/FlightHome"
import FligthOption from './FlightOption/FligthOption'
import ContactFlight from './FlightOption/ContactFlight'
import { PaymentFlight } from './FlightOption/PaymentFlight'
import PaymentSuccess from './FlightOption/PaymentSuccess/PaymentSuccess'
import Signup from './Login-signup/Signup'
import Login from './Login-signup/Login'
import Register from './Login-signup/Register'
import Registersecond from './Login-signup/Registersecond'
import Taxi from './Login-signup/Taxi'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path="/allhotels" element={<Hotel/>}></Route>
        <Route path="/allhotels/price" element={<HotelPrice/>}></Route>
        <Route path="/allhotels/price/:id" element={<HotelSeeAvialability/>}></Route>
        <Route path={"/allhotels/price/:id/Hotel-Checkout"} element={<HotelCheckout/>}/>
        <Route path={"/allhotels/price/:id/Hotel-Checkout/Payment"} element={<HotelPaymentPage/>}/>
        <Route path="/Flights" element={<FlightHome/>}></Route>
        <Route path={"/Sign-up"} element={<Signup/>}/>

        <Route path='/flightoption' element={<FligthOption />} />
        <Route path='/flightcontact' element={<ContactFlight />} />
        <Route path='/flightcontact/flightpayment' element={<PaymentFlight />} />
        <Route path='/flightcontact/flightpayment/PaymentSuccess' element={<PaymentSuccess />} />
        <Route path="*" element={<div>Page Not Found</div>} />


       <Route path='/register' element={<Login/>} />
       <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Register/>}/>
      <Route path='/Login/password' element={<Registersecond/>}/>
      <Route path="/Airport/Taxis" element={<Taxi/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes