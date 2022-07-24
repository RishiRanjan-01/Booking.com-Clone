import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotelCheckout from './HotelCheckout/HotelCheckout'
import HotelPaymentPage from './HotelCheckout/HotelPaymentPage'
import Signup from './Login-signup/Signup'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path={"/"} element={<HotelCheckout/>}/>
        <Route path={"/Hotel-Checkout/Payment"} element={<HotelPaymentPage/>}/>
        {/* <Route path={"/Sign-up"} element={<Signup/>}/> */}
    </Routes>
    </>
  )
}

export default MainRoutes